import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Slider from "./CarouselSlider";

const StyledTestimonails = styled(Flex)`
  gap: 3rem;
  width: 100%;
  max-width: 1500px;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

function Testimonails() {
  return (
    <StyledTestimonails className="test-con">
      <Heading as="h2">What they've said</Heading>
      <Slider />
      <Button padding=" 1.3rem 3rem" shadow="shadow" hover="orange">
        Get started
      </Button>
    </StyledTestimonails>
  );
}

export default Testimonails;
