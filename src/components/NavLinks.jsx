import { styled } from "styled-components";

const StyledNavLinks = styled.li`
  font-weight: 700;
  color: var(--cl-dark-blue);
  cursor: pointer;
  &:hover {
    color: var(--cl-dark-grayish-blue);
  }

  @media (min-width: 1024px) {
    font-weight: 500;
  }
`;

function NavLinks() {
  return (
    <>
      <StyledNavLinks>Pricing</StyledNavLinks>
      <StyledNavLinks>Products</StyledNavLinks>
      <StyledNavLinks>About Us</StyledNavLinks>
      <StyledNavLinks>Careers</StyledNavLinks>
      <StyledNavLinks>Comunity</StyledNavLinks>
    </>
  );
}

export default NavLinks;
