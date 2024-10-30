/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog }) => {
    return (
        <div className="blog-wrapper">
            <div className="blog-img-parent">
                <img className="img-fluid" src={blog.image} alt="img" />
            </div>
            <div className="blog-sub-parent">
                <span className="fs-18-c blog-sub">{blog.category}</span>
                <span className="fs-18-c blog-sub">{blog.readTime}</span>
            </div>
            <div className="blog-sub-2-parent">
                <p className="fs-32-c text-start">{blog.title}</p>
                <Link to="/"><img className="img-fluid" src="/public/assets/angel-icon.png" alt="icon" /></Link>
            </div>
        </div>
    );
};

export default BlogCard;
