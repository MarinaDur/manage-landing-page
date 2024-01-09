import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Button from "../ui/Button";
import FooterCopyRights from "./FooterCopyRights";
import { useSlider } from "../context/SliderContext";
import FormError from "./FormError";

const StyledFooterSubscribe = styled(Flex)`
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const Container = styled(Flex)`
  gap: 1rem;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 1.3rem 3rem;
  border: none;
  border-radius: 30px;
  outline: none;
  color: var(--cl-bright-red);
`;

function FooterSubscribe() {
  const { value, handleValue, hanldeSubmit, error } = useSlider();
  return (
    <StyledFooterSubscribe>
      <Container as="form" onSubmit={hanldeSubmit}>
        <StyledInput
          $bgCl="white"
          placeholder="Updates in your box..."
          type="text"
          value={value}
          onChange={handleValue}
        />
        <Button padding=" 1.3rem 3rem" fontSize="big" hover="orange">
          Go
        </Button>
        {error && <FormError />}
      </Container>
      <FooterCopyRights smallScreen="false" />
    </StyledFooterSubscribe>
  );
}

export default FooterSubscribe;
