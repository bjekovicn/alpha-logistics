import { Flex, Box, Text, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/logo-white.svg";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bg="brand.900" h="4rem" align="center" paddingRight="1rem">
      <img src={logo} alt="Logo" width={isMobile ? 130 : 170} />
      <Spacer />
      <Box display="flex" flexDirection="column" gap={1} color="#e8ebed">
        <Flex align="center">
          <FaPhone style={{ marginRight: "0.75rem" }} />
          <Text fontSize={isMobile ? "sm" : "md"}>+387 66 461 667</Text>
        </Flex>
        <Flex align="center">
          <FaEnvelope style={{ marginRight: "0.75rem" }} />
          <Text fontSize={isMobile ? "sm" : "md"}>
            office.alphalogistics@gmail.com
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
