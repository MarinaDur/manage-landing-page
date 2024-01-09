import { styled } from "styled-components";
import Header from "./Header";
import Flex from "../ui/Flex";
import InfoSection from "./InfoSection";
import Testimonails from "./Testimonails";
import Footer from "./Footer";
import Overlay from "../ui/Overlay";
import { useSlider } from "../context/SliderContext";

const StyledMain = styled(Flex)`
  padding-top: 3rem;
  gap: 9rem;
  width: 100%;
  background: url("bg-tablet-pattern.svg") no-repeat top left,
    url("bg-tablet-pattern.svg") no-repeat top right;
  background-size: 450px, 300px;
  background-position: 70px -120px, 230px 430px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    background-size: 450px, 550px;
    background-position: -250px 1450px, 350px -120px;
    flex-direction: column;
  }

  @media (min-width: 819px) {
    background-size: 650px, 750px;
    background-position: -350px 1550px, 350px -120px;
  }

  @media (min-width: 1024px) {
    background-size: 550px, 700px;
    background-position: -280px 1100px, 510px -90px;
  }

  @media (min-width: 1280px) {
    background-size: 550px, 750px;
    background-position: -280px 1100px, 610px -80px;
  }

  @media (min-width: 1400px) {
    background-size: 550px, 850px;
    background-position: -280px 1100px, 710px -150px;
  }

  @media (min-width: 1600px) {
    background-size: 550px, 900px;
    background-position: -280px 1100px, 850px -180px;
  }

  @media (min-width: 1800px) {
    background-size: 550px, 950px;
    background-position: -280px 1100px, 1000px -200px;
  }
`;

function Main() {
  const { isMenuOpen } = useSlider();

  return (
    <StyledMain>
      {isMenuOpen && <Overlay />}
      <Header />
      <InfoSection />
      <Testimonails />
      <Footer />
    </StyledMain>
  );
}

export default Main;
