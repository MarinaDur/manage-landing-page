import { styled, css } from "styled-components";
import Paragraph from "../ui/Paragraph";

const StyledFooterCopyRights = styled.div`
  ${(props) =>
    props.$bigScreen === "false" &&
    css`
      @media (min-width: 1024px) {
        display: none;
      }
    `}

  ${(props) =>
    props.$smallScreen === "false" &&
    css`
      @media (max-width: 1023px) {
        display: none;
      }
    `}
`;

function FooterCopyRights({ bigScreen, smallScreen }) {
  return (
    <StyledFooterCopyRights $bigScreen={bigScreen} $smallScreen={smallScreen}>
      <Paragraph>Copyright 2020. All rights reserved</Paragraph>
    </StyledFooterCopyRights>
  );
}

export default FooterCopyRights;
