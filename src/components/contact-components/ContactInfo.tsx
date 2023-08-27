import {
  VStack,
  Text,
  Link,
  useColorModeValue,
  Heading,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
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
  ];
  const color = useColorModeValue("gray.50", "gray.900");
  const subColor = useColorModeValue("gray.400", "gray.900");
  const { t } = useTranslation();

  return (
    <VStack
      p={{ sm: 5, md: 5, lg: 12 }}
      align={{ base: "center", lg: "flex-start" }}
      mb={{ base: "6", lg: "0" }}
    >
      <Heading color={color} mt={{ base: "6", lg: "0" }}>
        {t("contact.contactOurTeam")}
      </Heading>
      {contacts.map((contact, index) => (
        <Flex
          key={index}
          align={{ base: "center", lg: "flex-start" }} // Align center on small screens, flex-start on large screens
          direction={{ base: "column" }}
          justify="center"
          textAlign="center"
          mt={3}
        >
          <Text fontWeight="bold" color={color}>
            {contact.position}
          </Text>
          {contact.name && (
            <Flex align="center" mt={2}>
              <Text color={subColor}>{contact.name}</Text>
            </Flex>
          )}
          {contact.phone && (
            <Flex align="center" mt={2}>
              <Icon as={FaPhone} color={subColor} mr={2} />
              <Text color={subColor}>{contact.phone}</Text>
            </Flex>
          )}
          <Flex align="center" mt={2}>
            <Icon as={FaEnvelope} color={subColor} mr={2} />
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
