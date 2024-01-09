import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "../data/data.json";
import "swiper/swiper-bundle.css";

import styled from "styled-components";
import TestimonialComp from "./TestimonialComp";

// SwiperCore.use([Pagination, Autoplay]);

const StyledCarousel = styled.div`
  width: 100%;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  @media (min-width: 1024px) {
    width: 40%;
    max-width: 500px;
  }
`;

function CarouselSlider() {
  return (
    <StyledCarousel>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((obj, index) => (
          <CustomSwiperSlide key={index}>
            <TestimonialComp test={obj} />
          </CustomSwiperSlide>
        ))}
      </Swiper>
    </StyledCarousel>
  );
}

export default CarouselSlider;
