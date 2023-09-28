import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    brand: {
      400: "#036741",
      900: "#062b1a",
    },
  },
});

export default theme;
