import { styled } from "styled-components";
import Paragraph from "../ui/Paragraph";

const StyledFormError = styled.div`
  position: absolute;
  bottom: -2.5rem;
  left: 1rem;
`;

function FormError() {
  return (
    <StyledFormError>
      <Paragraph $error="error">Please insert a valid email</Paragraph>
    </StyledFormError>
  );
}

export default FormError;
