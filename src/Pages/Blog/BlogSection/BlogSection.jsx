import React from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogSection = () => {
    const blogs = [
        { id: 1, title: "How To Create A Modern That Attracts Customers?", category: "Marketing", readTime: "2 min read", image: "./assets/images/blog-img-1.png" },
        { id: 2, title: "How To Create A Modern That Attracts Customers?", category: "Marketing", readTime: "2 min read", image: "./assets/images/blog-img-2.png" },
        { id: 3, title: "How To Create A Modern That Attracts Customers?", category: "Marketing", readTime: "2 min read", image: "./assets/images/blog-img-1.png" },
        { id: 4, title: "How To Create A Modern That Attracts Customers?", category: "Marketing", readTime: "2 min read", image: "./assets/images/blog-img-2.png" },
        { id: 5, title: "How To Create A Modern That Attracts Customers?", category: "Marketing", readTime: "2 min read", image: "./assets/images/blog-img-1.png" },
        { id: 6, title: "How To Create A Modern That Attracts Customers?", category: "Marketing", readTime: "2 min read", image: "./assets/images/blog-img-2.png" },
    ];

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
