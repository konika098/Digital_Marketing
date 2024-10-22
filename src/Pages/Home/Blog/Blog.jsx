import React from 'react';
import './Blog.css'; // Assuming you will place your CSS in this file

const Blog = () => {
    const blogs = [
        {
            img: './assets/images/blog-img-1.png',
            category: 'Marketing',
            readTime: '2 min read',
            title: 'How To Create A Modern That Attracts Customers?',
            link: './blog.html',
        },
        {
            img: './assets/images/blog-img-2.png',
            category: 'Marketing',
            readTime: '2 min read',
            title: 'How To Create A Modern That Attracts Customers?',
            link: './blog.html',
        },
        // Repeat the above objects as needed for more blogs
    ];

    return (
        <div className="blog-section">
            <div className="container">
                <div className="testimonial-area">
                    <div className="test-sub">
                        <span className="fs-18 about-sub">Blog</span>
                    </div>
                    <h3 className="fs-52-c text-center" style={{ margin: '30px 0' }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">
                        Make Your Marketing <br className="d-none d-md-block" />
                        More Effective
                    </h3>

                    <div className="blog-slider-class">
                        {blogs.map((blog, index) => (
                            <div className="blog-wrapper" key={index}>
                                <div className="blog-img-parent">
                                    <img className="img-fluid" src={blog.img} alt="img" />
                                </div>
                                <div className="blog-sub-parent">
                                    <span className="fs-18-c blog-sub">{blog.category}</span>
                                    <span className="fs-18-c blog-sub">{blog.readTime}</span>
                                </div>
                                <div className="blog-sub-2-parent">
                                    <p className="fs-32-c text-start">{blog.title.split(' ').map((word, i) => (
                                        <span key={i}>
                                            {word} {i % 5 === 4 && <br className="d-none d-lg-block" />} 
                                        </span>
                                    ))}</p>
                                    <a href={blog.link}>
                                        <img className="img-fluid animatedImg" src="./assets/images/angel-icon.png" alt="icon" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
