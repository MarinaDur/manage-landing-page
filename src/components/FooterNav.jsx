import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";

const StyledFooterNav = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;
const StyledUl = styled(Flex)`
  gap: 1rem;
  align-items: flex-start;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledLi = styled.li``;

function FooterNav() {
  return (
    <StyledFooterNav>
      <StyledUl as="ul">
        <StyledLi>
          <Paragraph $li="true">Home</Paragraph>
        </StyledLi>
        <StyledLi>
          <Paragraph $li="true">Pricing</Paragraph>
        </StyledLi>
        <StyledLi>
          <Paragraph $li="true">Pruducts</Paragraph>
        </StyledLi>
        <StyledLi>
          <Paragraph $li="true">About us</Paragraph>
        </StyledLi>
      </StyledUl>
      <StyledUl as="ul">
        <StyledLi>
          <Paragraph $li="true">Careers</Paragraph>
        </StyledLi>
        <StyledLi>
          <Paragraph $li="true">Comunity</Paragraph>
        </StyledLi>
        <StyledLi>
          <Paragraph $li="true">Privacy policy</Paragraph>
        </StyledLi>
      </StyledUl>
    </StyledFooterNav>
  );
}

export default FooterNav;
