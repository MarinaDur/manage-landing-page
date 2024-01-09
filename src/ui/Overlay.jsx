import { styled } from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(158, 155, 155, 0.4767156862745098) 6%,
    rgba(1, 10, 19, 0.695203081232493) 25%
  );
  z-index: 2;
`;

function Overlay() {
  return <StyledOverlay></StyledOverlay>;
}

export default Overlay;
