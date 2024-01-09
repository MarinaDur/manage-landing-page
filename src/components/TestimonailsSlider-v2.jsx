import { styled } from "styled-components";
import data from "../data/data.json";
import TestimonialComp from "./TestimonialComp";
import { useEffect } from "react";
import { useSlider } from "../context/SliderContext";

//THIS COMPONENT NOT IN USE KEPT IT FOR REFERENCE

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  overflow: hidden;
  /* flex: 0 0 25%; */
  position: relative;
`;

const StyledSlider = styled.div`
  display: flex;
  height: 100%;
  width: 400%;
  flex-shrink: 0;
  transition: all 0.5s;
  /* flex: 0 0 25%; */
`;

function TestimonailsSlider() {
  const { activeIndex, setActiveIndex } = useSlider();
  console.log(activeIndex);

  useEffect(() => {
    const slider = document.querySelector(".slider");

    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => {
        slider.style.transform = `translate(-25%)`;
        return (prevIndex + 1) % data.length;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [setActiveIndex]);

  function handleTransitionEnd() {
    const slider = document.querySelector(".slider");

    slider.appendChild(slider.firstElementChild);

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "transform 0.5s";
    }, 500);
  }

  return (
    <StyledCarousel className="carousel">
      <StyledSlider className="slider" onTransitionEnd={handleTransitionEnd}>
        {data.map((test, index) => (
          <TestimonialComp key={index} test={test} className="carousel-comp" />
        ))}
      </StyledSlider>
    </StyledCarousel>
  );
}

export default TestimonailsSlider;
