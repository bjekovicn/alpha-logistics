import {
  VStack,
  Text,
  Link,
  useColorModeValue,
  Heading,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  const contacts = [
    {
      position: "Director",
      name: "Nikola Nikolic",
      email: "email1@gmail.com",
      phone: "066111222",
    },
    {
      position: "Regional Director",
      name: "Marko Markovic",
      email: "email2@gmail.ba",
      phone: "066111222",
    },
    {
      position: "Commercial Director",
      name: "Janko Jankovic",
      email: "email3@gmail.ba",
      phone: "066123123",
    },
    {
      position: "Commercial Director",
      name: "Stanko Stankovic",
      email: "email4@gmail.ba",
      phone: "066444555",
    },
  ];
  const color = useColorModeValue("gray.50", "gray.900");
  const subColor = useColorModeValue("gray.400", "gray.900");

  return (
    <VStack p={{ sm: 5, md: 5, lg: 16 }} align="flex-start">
      <Heading color={color}>Contact Our Team</Heading>
      {contacts.map((contact, index) => (
        <Flex key={index} align="start" direction={{ base: "column" }}>
          <Text fontWeight="bold" color={color} mt={3}>
            {contact.position}
          </Text>
          {contact.name && (
            <Flex align="center" mr={2}>
              <Text color={subColor}>{contact.name}</Text>
            </Flex>
          )}
          {contact.phone && (
            <Flex align="center" mr={2}>
              <Icon as={FaPhone} color={subColor} mr={3} />
              <Text color={subColor}>{contact.phone}</Text>
            </Flex>
          )}
          <Flex align="center">
            <Icon as={FaEnvelope} color={subColor} mr={3} />
            <Link href={`mailto:${contact.email}`} color={subColor}>
              {contact.email}
            </Link>
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
};

export default ContactInfo;
