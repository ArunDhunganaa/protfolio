import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="div">
          <h1>IamArun</h1>
        </div>
        <div className="">
          <div className="">
            <p>Full stack developer</p>
            <p>I build modern, interactive web experiences</p>
          </div>
          <div className="">
            <a href="#" className="btn">
              View my work
            </a>
            <a href="" className="btn">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-swiper">
          <Swiper className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
