import { styled } from "styled-components";
import Flex from "../ui/Flex";
import SvgLogo from "../ui/SvgLogo";
import Icons from "./Icons";

const StyledFooterLogo = styled(Flex)`
  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

function FooterLogo() {
  return (
    <StyledFooterLogo>
      <SvgLogo />
      <Icons smallScreen="false" />
    </StyledFooterLogo>
  );
}

export default FooterLogo;
