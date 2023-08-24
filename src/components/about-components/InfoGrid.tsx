"use client";
import {
  FaCheck,
  FaBox,
  FaGlobe,
  FaLeaf,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { ReactElement } from "react";
import { Box, SimpleGrid, Text, Stack, Flex, Heading } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack spacing={2}>
      <Flex align={"center"} mb={1}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"brand.900"}
        >
          {icon}
        </Flex>
        <Text fontWeight={600} ml={4} fontSize="lg">
          {title}
        </Text>
      </Flex>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};
export default function SimpleThreeColumns() {
  const { t } = useTranslation();
  return (
    <Box
      paddingY={{
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
      <Heading mb={10}>{t("about.whatSetsUsApart")}</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<FaCheck style={{ fontSize: "1.6rem" }} />}
          title={t("about.quality")}
          text={t("about.qualityDescription")}
        />
        <Feature
          icon={<FaBox style={{ fontSize: "1.6rem" }} />}
          title={t("about.protfolio")}
          text={t("about.protfolioDescription")}
        />{" "}
        <Feature
          icon={<FaGlobe style={{ fontSize: "1.6rem" }} />}
          title={t("about.partnerships")}
          text={t("about.partnershipsDescription")}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={5} mb={10}>
        <Feature
          icon={<FaLeaf style={{ fontSize: "1.6rem" }} />}
          title={t("about.focus")}
          text={t("about.focusDescription")}
        />
        <Feature
          icon={<FaUser style={{ fontSize: "1.6rem" }} />}
          title={t("about.customerApproach")}
          text={t("about.customerApproachDescription")}
        />
        <Feature
          icon={<FaUsers style={{ fontSize: "1.6rem" }} />}
          title={t("about.team")}
          text={t("about.teamDescription")}
        />
      </SimpleGrid>
    </Box>
  );
}
