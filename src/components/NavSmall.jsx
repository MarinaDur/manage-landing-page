import { styled } from "styled-components";
import Flex from "../ui/Flex";
import NavLinks from "./NavLinks";
import { useSlider } from "../context/SliderContext";

const StyledNavSmall = styled(Flex)`
  position: absolute;
  top: 0;
  left: 50%;
  background: white;
  /* padding: ${(props) => (props.$isMenuOpen ? " 4rem 3rem" : "0")}; */
  justify-content: center;
  width: 100%;
  transform: translate(-50%, 70px);
  border-radius: 5px;
  z-index: 9999;
  overflow: hidden;
  height: ${(props) => (props.$isMenuOpen ? "280px" : "0")};
  transition: all 0.5s ease-in-out;
`;

const StyledUl = styled(Flex)`
  gap: 2rem;
`;

function NavSmall() {
  const { isMenuOpen } = useSlider();

  return (
    <StyledNavSmall as="nav" $isMenuOpen={isMenuOpen}>
      <StyledUl as="ul">
        <NavLinks />
      </StyledUl>
    </StyledNavSmall>
  );
}

export default NavSmall;
