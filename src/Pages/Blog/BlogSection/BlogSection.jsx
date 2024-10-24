import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from "../BlogSection/Pagination"

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

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
        const filtered = category === 'all' ? blogs : blogs.filter(blog => blog.category === category);
        setFilteredBlogs(filtered);
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm));
        setFilteredBlogs(filtered);
    };

    return (
        <div className="blog-section">
            <div className="tab-section overflow-x-hidden">
                <div className="container">
                    <div className="tab-area">
                        <h4 className="fs-24-c category-title">Categories:</h4>
                        <div className="btn-parent">
                            <button data-name="all" className="filter btn btn-success active" onClick={handleFilter}>All</button>
                            <button data-name=".category-1" className="filter btn btn-success" onClick={handleFilter}>Design Marketing</button>
                            <button data-name=".category-2" className="filter btn btn-success" onClick={handleFilter}>Web</button>
                            <button data-name=".category-3" className="filter btn btn-success" onClick={handleFilter}>Digital Marketing</button>
                            <button data-name=".category-4" className="filter btn btn-success" onClick={handleFilter}>Branding</button>
                            <button data-name=".category-5" className="filter btn btn-success" onClick={handleFilter}>Content Creation</button>
                            <button data-name=".category-6" className="filter btn btn-success" onClick={handleFilter}>SEO Analysis</button>
                            <div className="search-btn">
                                <input type="search" id="searchInput" placeholder="Search by post" onChange={handleSearch} />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content row g-4">
                        {filteredBlogs.map(blog => (
                            <div className="col-lg-6" key={blog.id}>
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                    <Pagination/>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
