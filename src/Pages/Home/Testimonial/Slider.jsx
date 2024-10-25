import { useEffect } from "react";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import testimonialsData from "/public/Testimonial.json";

export default function Slider() {
  useEffect(() => {
    AOS.refresh(); 
  }, []);

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="testimonialSwiper"
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonialsData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div
            className="testimonial-wrapper"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img
              className="quote-icon"
              src={testimonial.quoteImage}
              alt="Quote"
            />
            <p className="testimonial-quote">{`"${testimonial.quote}"`}</p>
            <div className="rating">
              <img
                className="rating-stars"
                src={testimonial.ratingImage}
                alt="Rating"
              />
            </div>
            <h4 className="client-name">{testimonial.name}</h4>
            <p className="client-role">{testimonial.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
