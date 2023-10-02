import { Flex, Box, Text, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/logo-white.svg";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bg="brand.900" h="4rem" align="center" paddingRight="1rem">
      <img src={logo} alt="Logo" width={isMobile ? 130 : 170} />
      <Spacer />
      <Box display="flex" flexDirection="column" color="#e8ebed">
        <Flex align="center">
          <FaPhone style={{ marginRight: "0.85rem" }} />
          <Text fontSize="xs">+387 66 461 667</Text>
        </Flex>
        <Flex align="center">
          <FaPhone style={{ marginRight: "0.85rem" }} />
          <Text fontSize="xs"> +387 66 717 452</Text>
        </Flex>
        <Flex align="center">
          <FaEnvelope style={{ marginRight: "0.85rem" }} />
          <Text fontSize={isMobile ? "xs" : "sm"}>
            office@alphalogistics.ba
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
