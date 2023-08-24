"use client";

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
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
      <Heading mb={10}>What Sets Us Apart</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Quality Assurance"}
          text={
            "At AlphaLogistics, quality is paramount. We source our products from reputable refineries and suppliers, ensuring that every drop meets stringent quality standards. This commitment to excellence is the cornerstone of our reputation."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Diverse Portfolio:"}
          text={
            "From industrial lubricants to refined fuels, our extensive range of oil and oil derivatives caters to diverse industries and consumer needs. Our versatile portfolio positions us as a one-stop solution for all your energy requirements."
          }
        />{" "}
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Global Partnerships"}
          text={
            "We don't just operate within borders; we transcend them. Our network of international partners empowers us to offer a global perspective with localized efficiency. This enables us to navigate complex supply chains and deliver products wherever they are."
          }
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={5} mb={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Sustainability Focus"}
          text={
            " AlphaLogistics is dedicated to responsible business practices. We actively seek eco-friendly solutions, minimize our carbon footprint, and support sustainable initiatives within the communities we serve."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Customer-Centric Approach"}
          text={
            "Our customers are at the heart of everything we do. We listen, understand, and tailor our offerings to meet specific needs. Our customer-centric approach has earned us trust and loyalty in the market."
          }
        />{" "}
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Our Team"}
          text={
            "Our customers are at the heart of everything we do. We listen, understand, and tailor our offerings to meet specific needs. Our customer-centric approach has earned us trust and loyalty in the market."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
