import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from "../BlogSection/Pagination";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5; // Number of blogs to display per page

    useEffect(() => {
        fetch('/Blogs.json')
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
                setFilteredBlogs(data);
            })
            .catch(error => console.error('Error fetching blog data:', error));
    }, []);

    const handleFilter = (e) => {
        const category = e.target.getAttribute('data-name');
        setActiveCategory(category);
        const filtered = category === 'all' ? blogs : blogs.filter(blog => blog.category === category);
        setFilteredBlogs(filtered);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm));
        setFilteredBlogs(filtered);
        setCurrentPage(1); // Reset to first page when search changes
    };

    // Calculate pagination details
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Adjust current blogs logic to ensure last two cards go to next page
    const adjustedCurrentBlogs = currentPage === Math.ceil(filteredBlogs.length / blogsPerPage) 
        ? filteredBlogs.slice(-2) // Show last two cards on the last page
        : currentBlogs; // Show regular cards on other pages

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent out-of-bounds page numbers
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="tab-section overflow-x-hidden">
                <div className="container">
                    <div className="tab-area">
                        <h4 className="fs-24-c category-title">Categories:</h4>
                        <div className="btn-parent">
                            {["all", "Design Marketing", "Web", "Digital Marketing", "Branding", "Content Creation", "SEO Analysis"].map((category, index) => (
                                <button
                                    key={index}
                                    data-name={category}
                                    className={`filter btn btn-success ${activeCategory === category ? 'active' : ''}`}
                                    onClick={handleFilter}
                                >
                                    {category}
                                </button>
                            ))}
                            <div className="search-btn">
                                <input type="search" id="searchInput" placeholder="Search by post" onChange={handleSearch} />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content row g-4">
                        {adjustedCurrentBlogs.length > 0 ? (
                            adjustedCurrentBlogs.map(blog => (
                                <div className="col-lg-6" key={blog.id}>
                                    <BlogCard blog={blog} />
                                </div>
                            ))
                        ) : (
                            <p>No blogs found for the selected category or search term.</p>
                        )}
                    </div>
                    <Pagination 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={handlePageChange} 
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
