import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { BsPerson, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stack vertically on small screens, and side by side on larger screens
      align="stretch"
      justify="space-between"
      width="100%"
      height="100%"
      margin={0}
      padding={0}
      bg="brand.400"
    >
      <Wrap
        p={{ sm: 5, md: 5, lg: 12 }}
        spacing={{ base: 2, sm: 2, md: 5, lg: 16 }}
        justify="center"
      >
        <WrapItem>
          <Box>
            <Heading
              color="white"
              textAlign="center"
              mt={{ base: "6", lg: "0" }}
            >
              {t("contact.contactUs")}
            </Heading>
            <Text textAlign="center" mt={{ sm: 3, md: 3, lg: 5 }} color="white">
              {t("contact.fillUpForm")}
            </Text>
            <Box py={{ base: 10, sm: 10, md: 10, lg: 14 }}>
              <VStack pl={0} spacing={4} align="center">
                <Flex alignItems="center">
                  <Icon
                    as={MdPhone}
                    color={useColorModeValue("gray.50", "gray.900")}
                    size="20px"
                  />
                  <Text
                    color={useColorModeValue("gray.50", "gray.900")}
                    fontSize="lg"
                    ml={4}
                  >
                    +387 57 111 111
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Icon
                    as={MdEmail}
                    color={useColorModeValue("gray.50", "gray.900")}
                    size="20px"
                  />
                  <Text
                    color={useColorModeValue("gray.50", "gray.900")}
                    fontSize="lg"
                    ml={4}
                  >
                    alphalogistics@gmail.com
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Icon
                    as={MdLocationOn}
                    color={useColorModeValue("gray.50", "gray.900")}
                    size="20px"
                  />
                  <Text
                    color={useColorModeValue("gray.50", "gray.900")}
                    fontSize="lg"
                    ml={4}
                  >
                    Banja Luka, BiH
                  </Text>
                </Flex>
              </VStack>
            </Box>
            <HStack
              mt={{ lg: 4, md: 4 }}
              spacing={5}
              px={5}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                aria-label="instagram"
                variant="ghost"
                size="lg"
                isRound={false}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsInstagram size="28px" />}
              />
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={false}
                _hover={{ bg: "#0D74FF" }}
                icon={<MdFacebook size="30px" />}
              />

              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                isRound={false}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsLinkedin size="28px" />}
              />
            </HStack>
          </Box>
        </WrapItem>

        <WrapItem>
          <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            borderRadius="lg"
            m={4}
          >
            <Box m={14} color="#0B0E3F">
              <VStack spacing={6}>
                <FormControl id="name">
                  <FormLabel>{t("contact.yourName")}</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.800" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>{t("contact.email")}</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>{t("contact.phone")}</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlinePhone color="gray.800" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>{t("contact.message")}</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder={t("contact.enterMessage")}
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    variant="solid"
                    bg="brand.400"
                    color="white"
                    _hover={{}}
                  >
                    {t("contact.sendMessage")}
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
