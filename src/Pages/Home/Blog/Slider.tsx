import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../Home/Blog/Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import blogsData from '/public/Blog.json'; 
import angelIcon from "/public/assets/angel-icon.png"

export default function App() {
  return (
    <>
      <Swiper  slidesPerView={2} className="mySwiper">
        {blogsData.map((blog, index) => (
            <SwiperSlide>
                            <div className="blog-wrapper" key={index}>
                                <div className="blog-img-parent">
                                    <img className="img-fluid" src={blog.img} alt="Blog" />
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
                                        <img className="img-fluid animatedImg" src={angelIcon} alt="icon" />
                                    </a>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
    
      </Swiper>
    </>
  );
}
