import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Simplify from "./Simplify";
import FooterSubscribe from "./FooterSubscribe";
import FooterNav from "./FooterNav";
import Icons from "./Icons";
import FooterLogo from "./FooterLogo";
import FooterCopyRights from "./FooterCopyRights";

const StyledFooter = styled(Flex)`
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const Container = styled(Flex)`
  background: var(--cl-very-dark-blue);
  width: 100%;
  justify-content: center;
`;
const StyledLastCom = styled(Flex)`
  width: 100%;
  padding: 4rem 0;
  gap: 5rem;
  max-width: 1200px;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: stretch;
    width: 85%;
  }
`;

function Footer() {
  return (
    <StyledFooter as="footer">
      <Simplify />
      <Container>
        <StyledLastCom>
          <FooterSubscribe />
          <FooterNav />
          <Icons bigScreen="false" />
          <FooterLogo />
          <FooterCopyRights bigScreen="false" />
        </StyledLastCom>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
