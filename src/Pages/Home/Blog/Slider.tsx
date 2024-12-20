import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../Home/Blog/Slider.css";
import { Pagination } from "swiper/modules";
import { blogData } from "../../../utils/data";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="blog-wrapper">
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
                    src="https://i.postimg.cc/wxV5b40D/angel-icon.png"
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
