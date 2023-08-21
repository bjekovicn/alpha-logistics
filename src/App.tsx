import { Flex, Heading, Highlight } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const { t } = useTranslation();

  return (
    <ChakraProvider theme={theme}>
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
          >
            <Highlight
              query={[" alphalogistic@gmail.com"]}
              styles={{ px: "4", py: "1", rounded: "full", bg: "teal.100" }}
            >
              {t("infoMessage")}
            </Highlight>
          </Heading>
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
