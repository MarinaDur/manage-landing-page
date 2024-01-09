import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const StyledInfoIndivComp = styled(Flex)`
  width: 100%;
  gap: 1rem;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const StyleIndivCompHeader = styled(Flex)`
  flex-direction: row;
  background: var(--cl-very-pale-red);
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    background: transparent;
  }
`;

function InfoIndivComp({ number, header, text }) {
  return (
    <StyledInfoIndivComp>
      <StyleIndivCompHeader>
        <Button as="div" padding=".8rem 2.5rem" fontSize="big">
          {number}
        </Button>
        <Heading as="h3">{header}</Heading>
      </StyleIndivCompHeader>
      <Paragraph $textAlign="left">{text}</Paragraph>
    </StyledInfoIndivComp>
  );
}

export default InfoIndivComp;
