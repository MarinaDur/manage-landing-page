import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Img from "../ui/Img";
import Paragraph from "../ui/Paragraph";

//THIS COMPONENT NOT IN USE KEPT IT FOR REFERENCE

const StyledTestimonialComp = styled(Flex)`
  /* flex-basis: 100%;
  width: 100%; */
  flex-shrink: 0;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-top: 5rem;

  /* flex: 0 0 25%; */
`;

const StyledCon = styled(Flex)`
  width: 100%;
  padding-top: 4.5rem;
  padding-bottom: 2rem;
  position: relative;
  background: var(--cl-vary-light-gray);

  /* flex: 0 0 25%; */
`;

const StyledText = styled(Flex)`
  gap: 1rem;
  padding-inline: 2rem;
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
