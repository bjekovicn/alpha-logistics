import { Flex, Box, Text } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/logo-white.svg";

const Header = () => {
  return (
    <Flex
      bg="#072114"
      h="4rem"
      align="center"
      justify="space-between"
      padding="1rem"
    >
      <img src={logo} alt="Logo" width={170} height={120} />

      <Box display="flex" flexDirection="column" gap={1} color="#e8ebed">
        <Flex align="center">
          <FaPhone style={{ marginRight: "0.75rem" }} />
          <Text>+387 57 111 111</Text>
        </Flex>
        <Flex align="center">
          <FaEnvelope style={{ marginRight: "0.75rem" }} />
          <Text>alphalogistics@gmail.com</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
