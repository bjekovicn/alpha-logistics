import {
  Box,
  Flex,
  Heading,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <Flex
      flex="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingX={10}
      paddingBottom={20}
    >
      <Heading size="md" marginTop={10} textAlign="left">
        {t("products.whiteOils.heading")}
      </Heading>
      <Stack divider={<StackDivider />} spacing="4" width="100%">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.whiteOils.dizelBasEn")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.whiteOils.dizelBasEnText")}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.whiteOils.unleadedFuel95BasEn")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.whiteOils.unleadedFuel95BasEnText")}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.whiteOils.unleadedFuel98BasEn")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.whiteOils.unleadedFuel98BasEnText")}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.whiteOils.fuelOilBas1002Luel")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.whiteOils.fuelOilBas1002LuelText")}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.whiteOils.lpgTng")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.whiteOils.lpgTngText")}
          </Text>
        </Box>
      </Stack>

      <Heading size="md" marginTop={10}>
        {t("products.blackOils.heading")}
      </Heading>
      <Stack divider={<StackDivider />} spacing="4" width="100%">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.blackOils.mazut")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.blackOils.mazutText")}
          </Text>
          <UnorderedList>
            <ListItem fontSize="sm">
              {t("products.blackOils.extraLightFuelOil")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.mediumFuelOil")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.heavyFuelOil")}
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.blackOils.bitumen")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.blackOils.bitumenText")}
          </Text>
          <UnorderedList>
            <ListItem fontSize="sm">
              {t("products.blackOils.roadBitumen35_50")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.roadBitumen50_70")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.roadBitumen70_100")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.roadBitumen160_220")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.industrialBitumen85_40")}
            </ListItem>
            <ListItem fontSize="sm">
              {t("products.blackOils.polymerBitumenPMB45_80_65")}
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.blackOils.petroleumCoke")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.blackOils.petroleumCokeText")}
          </Text>
        </Box>
      </Stack>

      <Heading size="md" marginTop={10}>
        {t("products.specialDerivatives.heading")}
      </Heading>
      <Stack divider={<StackDivider />} spacing="4" width="100%">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.specialDerivatives.baseOils")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.specialDerivatives.baseOilsText")}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {t("products.specialDerivatives.jetFuel")}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("products.specialDerivatives.jetFuelText")}
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ProductsPage;
