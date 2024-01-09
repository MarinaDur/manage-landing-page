import { styled } from "styled-components";
import Flex from "../ui/Flex";
import InfoIndivComp from "./InfoIndivComp";

const StyledInfoCompsCon = styled(Flex)`
  width: 100%;
  padding-left: 2rem;
  gap: 5rem;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

function InfoCompsCon() {
  return (
    <StyledInfoCompsCon>
      <InfoIndivComp
        number="1"
        header="Track company-wide progress"
        text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
      />
      <InfoIndivComp
        number="2"
        header="Advanced built-in reports"
        text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
      />
      <InfoIndivComp
        number="3"
        header="Everything you need in one place"
        text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
      />
    </StyledInfoCompsCon>
  );
}

export default InfoCompsCon;
