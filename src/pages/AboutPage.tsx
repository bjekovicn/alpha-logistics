import { Flex } from "@chakra-ui/react";
import InfoGrid from "../components/about-components/InfoGrid";
import Cover from "../components/about-components/Cover";

const AboutPage = () => {
  return (
    <Flex
      flex="1"
      flexDirection="column"
      justifyContent="flex-start" // Change this to flex-start
    >
      <Cover />
      <InfoGrid />
    </Flex>
  );
};

export default AboutPage;
