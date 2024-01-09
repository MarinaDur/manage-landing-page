import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledSimplify = styled(Flex)`
  width: 100%;
  justify-content: center;

  @media (max-width: 1023px) {
    background: var(--cl-bright-red) url("bg-simplify-section-mobile.svg")
      no-repeat bottom left;
    background-position: 0px 60px;
  }

  @media (min-width: 1024px) {
    background: url("bg-simplify-section-desktop.svg") no-repeat bottom left
      var(--cl-bright-red);
    background-position: 180px -130px, 750px -190px;
  }

  @media (min-width: 1280px) {
    background-position: 100px -130px, 300px -130px;
  }
`;

const SimplifyText = styled(Flex)`
  width: 75%;
  padding: 10rem 0;
  gap: 3rem;
  max-width: 1200px;

  @media (min-width: 1024px) {
    width: 85%;
    justify-content: space-between;
    padding: 7rem 0;
  }
`;

function Simplify() {
  return (
    <StyledSimplify>
      <SimplifyText>
        <Heading as="h4">Simplify how your team works today.</Heading>
        <Button
          padding=" 1.3rem 3rem"
          shadow="shadow"
          bgCl="white"
          textCl="orange"
          hover="white"
        >
          Get started
        </Button>
      </SimplifyText>
    </StyledSimplify>
  );
}

export default Simplify;
