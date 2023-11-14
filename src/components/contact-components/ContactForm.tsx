import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Grid,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import config from "../../config/config";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const dummyRef = useRef(null);
  const { t } = useTranslation();
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const openSuccessDialog = () => setIsSuccessDialogOpen(true);

  const closeSuccessDialog = () => setIsSuccessDialogOpen(false);

  const openErrorDialog = () => setIsErrorDialogOpen(true);

  const closeErrorDialog = () => setIsErrorDialogOpen(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    setIsFormValid(
      formData.name !== "" &&
        formData.email !== "" &&
        formData.phone !== "" &&
        formData.message !== "" &&
        recaptchaValue !== ""
    );
  }, [formData, recaptchaValue]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await emailjs.send(
        config.EMAIL_SERVICE_ID,
        config.EMAIL_TEMPLATE_ID,
        formData,
        config.EMAIL_PUBLIC_KEY
      );
      openSuccessDialog();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      openErrorDialog();
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stack vertically on small screens, and side by side on larger screens
      align="stretch"
      justify="center"
      width="100%"
      height="100%"
      margin={0}
      padding={0}
      bg="brand.400"
    >
      <AlertDialog
        isOpen={isSuccessDialogOpen}
        onClose={closeSuccessDialog}
        leastDestructiveRef={dummyRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent m={6}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("contact.success")}
            </AlertDialogHeader>
            <AlertDialogBody>{t("contact.successMessage")}</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeSuccessDialog} colorScheme="green" ml={3}>
                {t("contact.close")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog
        isOpen={isErrorDialogOpen}
        onClose={closeErrorDialog}
        leastDestructiveRef={dummyRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent m={6}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("contact.error")}
            </AlertDialogHeader>
            <AlertDialogBody>{t("contact.errorMessage")}</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeErrorDialog} colorScheme="red" ml={3}>
                {t("contact.close")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Wrap
        p={{ sm: 4, md: 4, lg: 12 }}
        spacing={{ base: 4, sm: 4, md: 6, lg: 16 }}
        justify="center"
        direction={{ base: "column", lg: "row" }}
      >
        <WrapItem flex={{ base: "none", lg: "1" }} order={{ base: 2, lg: 1 }}>
          <Box m={4}>
            <Heading color="white" textAlign="start">
              {t("contact.contactUs")}
            </Heading>
            <Text textAlign="start" color="white">
              {t("contact.fillUpForm")}
            </Text>
            <Box mt={12}>
              <VStack spacing={4} align="start">
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
                    +387 66 461 667
                  </Text>
                </Flex>
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
                    +387 66 717 452
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
                    office@alphalogistics.ba
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
                    Bana Milosavljevića 8, 78000 Banja Luka
                  </Text>
                </Flex>
              </VStack>
            </Box>
          </Box>
        </WrapItem>
        <WrapItem
          flex={{ base: "none", lg: "1" }}
          order={{ base: 2, lg: 1 }}
          justifyContent="center"
        >
          <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            borderRadius="lg"
            m={4}
          >
            <Box m={{ base: "4", md: "8", lg: "12" }} color="#0B0E3F">
              <form onSubmit={handleSubmit}>
                <Grid gap={4}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                    gap={4}
                  >
                    <FormControl isRequired>
                      <FormLabel>{t("contact.yourName")}</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>{t("contact.email")}</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>{t("contact.phone")}</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlinePhone color="gray.800" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                        />
                      </InputGroup>
                    </FormControl>
                  </Grid>
                  <FormControl isRequired gridColumn={{ md: "span 2" }}>
                    <FormLabel>{t("contact.message")}</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      h="150px"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder={t("contact.enterMessage")}
                    />
                  </FormControl>
                  <FormControl gridColumn={{ md: "span 2" }}>
                    <ReCAPTCHA
                      sitekey={config.RECAPTCHA_KEY}
                      onChange={(value) => {
                        if (!value) return;
                        setRecaptchaValue(value);
                      }}
                    />
                  </FormControl>
                  <FormControl gridColumn={{ md: "span 2" }}>
                    <Button
                      variant="solid"
                      bg="brand.400"
                      color="white"
                      type="submit"
                      _hover={{}}
                      isDisabled={!isFormValid}
                    >
                      {t("contact.sendMessage")}
                    </Button>
                  </FormControl>
                </Grid>
              </form>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
