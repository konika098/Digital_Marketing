import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Home/Blog/Slider.css";


import { Pagination } from "swiper/modules";
import blogsData from "/public/Blog.json";
import angelIcon from "/public/assets/angel-icon.png";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          {blogsData.map((blog, index) => (
            <div className="blog-wrapper" key={index}>
              <div className="blog-img-parent">
                <img className="img-fluid" src={blog.img} alt="Blog" />
              </div>
              <div className="blog-sub-parent">
                <span className="fs-18-c blog-sub">{blog.category}</span>
                <span className="fs-18-c blog-sub">{blog.readTime}</span>
              </div>
              <div className="blog-sub-2-parent">
                <p className="fs-32-c text-start">
                  {blog.title.split(" ").map((word, i) => (
                    <span key={i}>
                      {word}{" "}
                      {i % 5 === 4 && <br className="d-none d-lg-block" />}
                    </span>
                  ))}
                </p>
                <Link to={blog.link}>
                  <img
                    className="img-fluid animatedImg"
                    src={angelIcon}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
