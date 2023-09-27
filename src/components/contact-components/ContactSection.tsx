import { Container, Flex, Box } from "@chakra-ui/react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <Container
      bg="brand.900"
      maxW="full"
      padding={0}
      centerContent
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }} // Stack vertically on small screens, and side by side on larger screens
        width="100%"
      >
        <Box width={{ base: "100%", lg: "45%" }}>
          <ContactInfo />
        </Box>
        <Box width={{ base: "100%", lg: "55%" }}>
          <ContactForm />
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactSection;
