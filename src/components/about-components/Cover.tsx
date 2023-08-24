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
import MyImage from "../../assets/tanker2.jpg";

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
            alt={"feature image"}
            src={MyImage} // Use the imported image here
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
