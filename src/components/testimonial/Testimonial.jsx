import React from "react";
import testimonialContent from "./TestimonialContent";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "./Testimonial.scss";
//Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

const Testimonial = () => {
  const isBigEnough = useMediaQuery({ query: "(min-width:900px)" });
  return (
    <section className="testimonial">
      <div className="testimonial__heading">
        <h2>What they've said</h2>
      </div>
      {isBigEnough ? (
        <div className="testimonial__content">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={true}
            loop
            speed={800}
            slidesPerView={3}
          >
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[0].image}
                alt={testimonialContent[0].name}
              />
              <h3>{testimonialContent[0].name}</h3>
              <p>{testimonialContent[0].description}</p>
            </SwiperSlide>
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[1].image}
                alt={testimonialContent[1].name}
              />
              <h3>{testimonialContent[1].name}</h3>
              <p>{testimonialContent[1].description}</p>
            </SwiperSlide>
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[2].image}
                alt={testimonialContent[2].name}
              />
              <h3>{testimonialContent[2].name}</h3>
              <p>{testimonialContent[2].description}</p>
            </SwiperSlide>
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[3].image}
                alt={testimonialContent[3].name}
              />
              <h3>{testimonialContent[3].name}</h3>
              <p>{testimonialContent[3].description}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="testimonial__content">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            speed={800}
            slidesPerView={1}
          >
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[0].image}
                alt={testimonialContent[0].name}
              />
              <h3>{testimonialContent[0].name}</h3>
              <p>{testimonialContent[0].description}</p>
            </SwiperSlide>
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[1].image}
                alt={testimonialContent[1].name}
              />
              <h3>{testimonialContent[1].name}</h3>
              <p>{testimonialContent[1].description}</p>
            </SwiperSlide>
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[2].image}
                alt={testimonialContent[2].name}
              />
              <h3>{testimonialContent[2].name}</h3>
              <p>{testimonialContent[2].description}</p>
            </SwiperSlide>
            <SwiperSlide className="testimonial__content__swiper">
              <img
                src={testimonialContent[3].image}
                alt={testimonialContent[3].name}
              />
              <h3>{testimonialContent[3].name}</h3>
              <p>{testimonialContent[3].description}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      <div className="testimonial__getStarted">
        <button type="button">get started</button>
      </div>
    </section>
  );
};

export default Testimonial;
