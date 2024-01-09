import { styled, css } from "styled-components";

const Paragraph = styled.p`
  text-align: center;
  color: var(--cl-dark-grayish-blue);
  font-weight: 400;
  line-height: 1.7;

  ${(props) =>
    props.$textAlign === "left" &&
    css`
      text-align: left;
    `}

  ${(props) =>
    props.$testimonail === "true" &&
    css`
      font-weight: 700;
      color: var(--cl-dark-blue);
    `}

  ${(props) =>
    props.$li === "true" &&
    css`
      color: var(--cl-vary-light-gray);
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--cl-bright-red);
      }
    `}

  ${(props) =>
    props.$alignBig === "left" &&
    css`
      @media (min-width: 1024px) {
        text-align: left;
      }
    `}

  ${(props) =>
    props.$error === "error" &&
    css`
      color: var(--cl-bright-red);
      font-size: 1.3rem;
      font-style: italic;
    `}
`;

export default Paragraph;
