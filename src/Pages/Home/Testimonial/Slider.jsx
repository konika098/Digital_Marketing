import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import testimonialsData from "/public/Testimonial.json";

export default function Slider() {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after Swiper renders
  }, []);

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div
            className="tst-wrapper"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img
              className="quote"
              src={testimonial.quoteImage}
              alt="Quote icon"
            />
            <p className="fs-18-c text-center">{`"${testimonial.quote}"`}</p>
            <div className="rating">
              <img
                className="img-fluid"
                src={testimonial.ratingImage}
                alt="Rating"
              />
            </div>
            <h4 className="client-name">{testimonial.name}</h4>
            <p className="fs-18-c">{testimonial.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
