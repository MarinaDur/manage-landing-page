import { styled } from "styled-components";
import NavigationSection from "./NavigationSection";
import Hero from "./Hero";
import Flex from "../ui/Flex";
import NavSmall from "./NavSmall";

const StyledHeader = styled(Flex)`
  width: 85%;
  gap: 2rem;
  position: relative;
  max-width: 1200px;

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 8rem;
  }
`;

function Header() {
  return (
    <StyledHeader as="header">
      <NavSmall />
      <NavigationSection />
      <Hero />
    </StyledHeader>
  );
}

export default Header;
