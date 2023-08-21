import { Flex, Heading, Highlight } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <NavBar />
      <Flex
        flex="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          paddingTop={28}
          paddingBottom={28}
          paddingLeft={6}
          paddingRight={6}
          lineHeight="tall"
          textAlign="center"
          size="md"
          noOfLines={2}
        >
          <Highlight
            query={[" alphalogistic@gmail.com"]}
            styles={{ px: "4", py: "2", rounded: "full", bg: "teal.100" }}
          >
            Site is currently not available. The site is under construction and
            will be available soon. During this time you can email us at
            alphalogistic@gmail.com
          </Highlight>
        </Heading>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
