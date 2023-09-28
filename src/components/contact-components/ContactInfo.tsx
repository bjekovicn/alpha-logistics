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
  const { t } = useTranslation();
  const contacts = [
    {
      position: t("contact.director"),
      name: "Aleksandar Crnomarković",
      email: "aleksandar.alphalogistics@gmail.com",
      phone: "+387 66 461 667",
    },
    {
      position: t("contact.executiveDirector"),
      name: "Goran Bera",
      email: "goran.bera.alphalogistics@gmail.com",
      phone: "+387 66 461 667",
    },
  ];
  const color = useColorModeValue("gray.50", "gray.900");
  const subColor = useColorModeValue("gray.400", "gray.900");

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
