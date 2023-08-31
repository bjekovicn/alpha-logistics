"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <img width={160} height={80} src={logo}></img>
        <Stack direction={"row"} spacing={6}>
          <Box
            as="a"
            onClick={() => navigate("/")}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {t("homePage")}
          </Box>
          <Box
            as="a"
            onClick={() => navigate("/about")}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {t("aboutPage")}
          </Box>
          <Box
            as="a"
            onClick={() => navigate("/contact")}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {t("contactPage")}
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Alpha logistics. {t("AllRightsReserved")}</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
