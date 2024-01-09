import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Img from "../ui/Img";
import { useSlider } from "../context/SliderContext";
import NavBig from "./NavBig";
import Button from "../ui/Button";

const StyledNavigationSection = styled(Flex)`
  padding-top: 1rem;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 9999999;
`;

function NavigationSection() {
  const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useSlider();

  return (
    <StyledNavigationSection>
      <Img src="logo.svg" alt="logo" size="120px" marginTop="1rem" />
      <NavBig />
      {isMenuOpen ? (
        <Img
          src="icon-close.svg"
          alt="close-menu"
          size="25px"
          handleClick={handleCloseMenu}
          bigScreen="false"
        />
      ) : (
        <Img
          src="icon-hamburger.svg"
          alt="open-menu"
          size="25px"
          handleClick={handleOpenMenu}
          bigScreen="false"
        />
      )}
      <Button
        padding=" 1.3rem 3rem"
        shadow="shadow"
        smallScreen="false"
        hover="orange"
      >
        Get started
      </Button>
    </StyledNavigationSection>
  );
}

export default NavigationSection;
