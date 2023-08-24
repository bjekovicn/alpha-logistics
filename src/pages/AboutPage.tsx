import { Flex } from "@chakra-ui/react";
import Cover from "../components/about-components/cover";
import InfoGrid from "../components/about-components/InfoGrid";

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
