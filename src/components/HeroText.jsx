import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const StyledHeroText = styled(Flex)`
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding-right: 3rem;
    width: 50%;
    gap: 3rem;
  }
`;

function HeroText() {
  return (
    <StyledHeroText>
      <Heading as="h1">
        Bring everyone together to build better products.
      </Heading>
      <Paragraph $alignBig="left">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </Paragraph>
      <Button padding=" 1.3rem 3rem" shadow="shadow" hover="orange">
        Get started
      </Button>
    </StyledHeroText>
  );
}

export default HeroText;
