import { styled } from "styled-components";

const StyledSvgIcons = styled.svg`
  cursor: pointer;

  &:hover {
    path {
      fill: var(--cl-bright-red);
      transition: all 0.2s ease-in-out;
    }
  }
`;

function Svg({ width, height, d, viewBox, fill }) {
  return (
    <StyledSvgIcons
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path fill={fill} d={d} />
    </StyledSvgIcons>
  );
}

export default Svg;
