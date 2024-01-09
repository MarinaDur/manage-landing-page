import { styled, css } from "styled-components";

const Heading = styled.h1`
  color: var(--cl-dark-blue);
  text-align: center;
  font-weight: 700;
  line-height: 1.2;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.2rem;
      @media (min-width: 1024px) {
        text-align: left;
        font-size: 4rem;
      }

      @media (min-width: 1280px) {
        font-size: 5.5rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.8rem;
      @media (min-width: 1024px) {
        text-align: left;
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.7rem;
      letter-spacing: -1px;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3.2rem;
      color: var(--cl-very-pale-red);

      @media (min-width: 1024px) {
        font-size: 3.5rem;
        text-align: left;
        width: 50%;
      }
    `}
`;

export default Heading;
