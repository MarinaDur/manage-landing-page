import { styled } from "styled-components";
import Flex from "../ui/Flex";
import data from "../data/data.json";
import { useSlider } from "../context/SliderContext";

//THIS COMPONENT IS NOT IN USE, LEFT FOR REFERENCE

const StyledPagination = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  /* gap: 0.5rem; */
  width: 10%;
`;

const StyledDot = styled.li`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 1px solid var(--cl-bright-red);

  background: ${(props) => props.$active && "var(--cl-bright-red)"};
`;

function Pagination() {
  const { activeIndex } = useSlider();

  return (
    <StyledPagination as="ul">
      {data.map((circle, index) => (
        <StyledDot $active={index === activeIndex} key={index} />
      ))}
    </StyledPagination>
  );
}

export default Pagination;
