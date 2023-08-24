"use client";

import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      paddingY={{
        base: "6",
        sm: "6",
        md: "7",
        lg: "16",
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
          <Heading>
            AlphaLogistics - Your Trusted Partner in Oil and Oil Derivatives
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Established in 2022, our journey has been one of continuous growth,
            strategic partnerships, and unwavering commitment to excellence.
            With a strong presence both within Bosnia and Herzegovina and beyond
            its borders, we have swiftly become a trusted name in the industry.
          </Text>
          <Heading>Our Vision and Mission</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Our vision is to redefine the standards of oil and oil derivatives
            distribution, bringing efficiency, reliability, and sustainability
            to the forefront. We aim to be the go-to choice for businesses and
            individuals seeking top-quality products coupled with seamless
            logistics. Our mission is simple yet profound: to deliver
            exceptional value to our customers, partners, and communities.
            Through transparent practices, innovative solutions, and responsible
            business operations, we strive to create lasting relationships and
            drive positive change in the energy sector.
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
