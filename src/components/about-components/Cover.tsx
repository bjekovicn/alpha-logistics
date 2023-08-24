"use client";

import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function SplitWithImage() {
  const { t } = useTranslation();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      marginTop={{
        base: "6",
        sm: "6",
        md: "7",
        lg: "10",
      }}
      paddingX={{
        base: "6",
        sm: "6",
        md: "14",
        lg: "10",
      }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>{t("about.aboutUs")}</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            {t("about.aboutUsDescription")}
          </Text>
          <Heading>{t("about.visionMission")}</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            {t("about.visionMissionDescription")}
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
