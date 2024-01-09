import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Img from "../ui/Img";
import Paragraph from "../ui/Paragraph";

const StyledTestimonialComp = styled(Flex)`
  padding-top: 5rem;
`;

const StyledCon = styled(Flex)`
  padding-top: 4.5rem;
  padding-bottom: 2rem;
  position: relative;
  background: var(--cl-vary-light-gray);

  @media (min-width: 1024px) {
    width: 110%;
    max-width: 480px;
    min-height: 210px;
    flex-direction: column;
  }
`;

const StyledText = styled(Flex)`
  gap: 1rem;
  padding-inline: 2rem;
  @media (min-width: 1024px) {
    padding-inline: 3rem;
    flex-direction: column;
  }
`;

function TestimonialComp({ test }) {
  const { image, name, quote } = test;
  return (
    <StyledTestimonialComp>
      <StyledCon>
        <Img src={image} alt="avatar" pos="absolute" size="70px" />
        <StyledText>
          <Paragraph $testimonail="true">{name}</Paragraph>
          <Paragraph>{quote}</Paragraph>
        </StyledText>
      </StyledCon>
    </StyledTestimonialComp>
  );
}

export default TestimonialComp;
