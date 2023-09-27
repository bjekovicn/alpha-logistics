import { Flex } from "@chakra-ui/react";
import CaptionCarousel from "../components/home-components/Carousel";

const HomePage = () => {
  return (
    <Flex
      flex="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CaptionCarousel />
    </Flex>
  );
};

export default HomePage;
