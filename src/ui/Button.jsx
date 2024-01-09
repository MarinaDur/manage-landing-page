import { styled, css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 30px;
  font-weight: 700;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  padding: ${(props) => (props.$padding ? `${props.$padding}` : "0")};

  background: ${(props) =>
    props.$bgCl === "white"
      ? "var(--cl-vary-light-gray)"
      : "var(--cl-bright-red)"};

  color: ${(props) =>
    props.$textCl === "orange"
      ? "var(--cl-bright-red)"
      : "var(--cl-vary-light-gray)"};

  font-size: ${(props) => (props.$fontSize === "big" ? "1.5rem" : "1.2rem")};

  box-shadow: ${(props) =>
    props.$shadow === "shadow"
      ? "0px 19px 32px -19px var(--cl-bright-red); -webkit-box-shadow: 00px 19px 32px -19px var(--cl-bright-red); -moz-box-shadow: 0px 19px 32px -19px var(--cl-bright-red);"
      : "none"};

  ${(props) =>
    props.$smallScreen === "false" &&
    css`
      @media (max-width: 1023px) {
        display: none;
      }
    `}

  ${(props) =>
    props.$hover &&
    css`
      &:hover {
        background: ${(props) =>
          props.$hover === "orange" && "var(--cl-bright-red-hover)"};
        color: ${(props) =>
          props.$hover === "white" && "var(--cl-bright-red-hover)"};
      }
    `}
`;

function Button({
  children,
  padding,
  bgCl,
  textCl,
  fontSize,
  shadow,
  smallScreen,
  hover,
}) {
  return (
    <StyledButton
      $padding={padding}
      $bgCl={bgCl}
      $textCl={textCl}
      $fontSize={fontSize}
      $shadow={shadow}
      $smallScreen={smallScreen}
      $hover={hover}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
