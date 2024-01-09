import { styled } from "styled-components";
import Flex from "../ui/Flex";
import InfoText from "./InfoText";
import InfoCompsCon from "./InfoCompsCon";

const StyledInfoSection = styled(Flex)`
  /* width: 95%; */
  gap: 5rem;
  max-width: 1200px;
  @media (min-width: 1024px) {
    align-items: flex-start;
    width: 85%;
  }
`;

function InfoSection() {
  return (
    <StyledInfoSection>
      <InfoText />
      <InfoCompsCon />
    </StyledInfoSection>
  );
}

export default InfoSection;
