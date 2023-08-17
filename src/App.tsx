import { Heading, Highlight } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-green-light">
      <Header></Header>
      <NavBar></NavBar>
      <Heading
        paddingTop={28}
        paddingBottom={28}
        lineHeight="tall"
        textAlign="center"
      >
        <Highlight
          query={[" alphalogistic@gmail.com"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
        >
          Site is currently not available. The site is under construction and
          will be available soon. During this time you can email us at
          alphalogistic@gmail.com
        </Highlight>
      </Heading>
      <Footer></Footer>
    </div>
  );
}

export default App;
