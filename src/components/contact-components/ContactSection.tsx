import { Container } from "@chakra-ui/react";
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
      <ContactForm />
    </Container>
  );
};

export default ContactSection;
