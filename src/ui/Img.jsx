import { styled, css } from "styled-components";
import Flex from "./Flex";

const StyledImgContainer = styled(Flex)`
  margin-top: ${(props) => (props.$marginTop ? `${props.$marginTop}` : "0")};
  width: ${(props) => props.$size && `${props.$size}`};

  @media (min-width: 1024px) {
    width: ${(props) => props.$sizeBig && `${props.$sizeBig}`};
    justify-content: ${(props) => props.$align && `${props.$align}`};
  }

  ${(props) =>
    props.$pos === "absolute" &&
    css`
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.$bigScreen === "false" &&
    css`
      @media (min-width: 1024px) {
        display: none;
      }
    `}
`;

const StyledImg = styled.img``;
function Img({
  src,
  alt,
  size,
  marginTop,
  pos,
  handleClick,
  sizeBig,
  align,
  bigScreen,
}) {
  return (
    <StyledImgContainer
      $marginTop={marginTop}
      $pos={pos}
      $size={size}
      $sizeBig={sizeBig}
      $align={align}
      onClick={handleClick}
      $bigScreen={bigScreen}
    >
      <StyledImg src={src} alt={alt} />
    </StyledImgContainer>
  );
}

export default Img;
