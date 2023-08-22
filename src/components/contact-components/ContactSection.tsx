import { Container, Flex } from "@chakra-ui/react";
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
        align="stretch"
        justify="space-between"
        width="100%"
      >
        <ContactInfo />
        <ContactForm />
      </Flex>
    </Container>
  );
};

export default ContactSection;
