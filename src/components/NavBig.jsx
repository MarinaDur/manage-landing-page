import { styled } from "styled-components";
import Flex from "../ui/Flex";
import NavLinks from "./NavLinks";

const StyledNavBig = styled(Flex)`
  @media (max-width: 1023px) {
    display: none;
  }
`;

const StyledUl = styled(Flex)`
  list-style: none;
  gap: 2.5rem;
`;

function NavBig() {
  return (
    <StyledNavBig>
      <StyledUl>
        <NavLinks />
      </StyledUl>
    </StyledNavBig>
  );
}

export default NavBig;
