import { Flex, Heading, Highlight } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flex="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        paddingTop={28}
        paddingBottom={28}
        paddingLeft={6}
        paddingRight={6}
        lineHeight="tall"
        textAlign="center"
        size="md"
      >
        <Highlight
          query={[" alphalogistic@gmail.com"]}
          styles={{ px: "4", py: "1", rounded: "full", bg: "teal.100" }}
        >
          {`${t("aboutUsPage")} ${t("infoMessage")}`}
        </Highlight>
      </Heading>
    </Flex>
  );
};

export default AboutPage;
