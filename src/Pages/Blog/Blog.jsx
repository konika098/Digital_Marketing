import React from 'react';
import Email from '../Home/Email/Email';
import BlogBanner from './BlogBanner/BlogBanner';
import BlogSection from './BlogSection/BlogSection';

const Blog = () => {
    return (
        <>
        <BlogBanner/>
        <BlogSection/>
        <Email/>
        </>
    );
};

export default Blog;