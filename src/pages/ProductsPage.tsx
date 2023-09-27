import { Flex, Heading, Highlight } from "@chakra-ui/react";

const ProductsPage = () => {
  return (
    <Flex
      flex="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        paddingTop={22}
        paddingBottom={22}
        lineHeight="normal"
        textAlign="center"
      >
        <Highlight
          query={["products page"]}
          styles={{ px: "4", py: "2", rounded: "full", bg: "teal.100" }}
        >
          The products page is under construction and will be available soon.
        </Highlight>
      </Heading>
    </Flex>
  );
};

export default ProductsPage;
