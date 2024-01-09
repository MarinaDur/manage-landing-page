import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const StyledInfoText = styled(Flex)`
  gap: 2rem;
  padding-inline: 3rem;

  @media (min-width: 1024px) {
    flex-direction: column;
    padding: 0;
    align-items: flex-start;
  }
`;

function InfoText() {
  return (
    <StyledInfoText>
      <Heading as="h2">What’s different about Manage?</Heading>
      <Paragraph $alignBig="left">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </Paragraph>
    </StyledInfoText>
  );
}

export default InfoText;
