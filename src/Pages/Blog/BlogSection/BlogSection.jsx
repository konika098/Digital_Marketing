import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/Blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blog data:', error));
    }, []);

    return (
        <div className="blog-section">
            <h2 className="category-title">Blog Posts</h2>
            <div className="blog-content row g-4">
                {blogs.map(blog => (
                    <div className="col-lg-6" key={blog.id}>
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default BlogSection;
