import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { LoadScript } from "@react-google-maps/api";
import config from "./config/config";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoadScript googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}>
        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Flex>
      </LoadScript>
    </ChakraProvider>
  );
}

export default App;
