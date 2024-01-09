import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Img from "../ui/Img";
import HeroText from "./HeroText";

const StyledHero = styled(Flex)`
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    gap: 5rem;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <Img
        src="illustration-intro.svg"
        alt="tablets"
        size="100%"
        sizeBig="55%"
        align="flex-end"
      />
      <HeroText />
    </StyledHero>
  );
}

export default Hero;
