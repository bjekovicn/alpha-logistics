"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import image1 from "../../assets/refinery.jpeg";
import image2 from "../../assets/pipeline.jpg";
import image3 from "../../assets/tanker3.jpg";
import image4 from "../../assets/tanker4.jpg";
import image5 from "../../assets/tanker5.jpg";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const { t } = useTranslation();

  const cards = [
    {
      title: t("home.carouselMessages.message2"),
      image: image1,
    },
    {
      title: t("home.carouselMessages.message1"),
      image: image2,
    },
    {
      title: t("home.carouselMessages.message3"),
      image: image3,
    },
    {
      title: t("home.carouselMessages.message4"),
      image: image4,
    },
    {
      title: t("home.carouselMessages.message5"),
      image: image5,
    },
  ];
  const color = useColorModeValue("gray.50", "gray.900");

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Flex height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={{ base: "xl", md: "xl", lg: "3xl" }}
                position="absolute"
                top="15%"
                p={{ base: "14px", md: "14px", lg: "20px" }}
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "xl", md: "xl", lg: "3xl" }}
                  color={color}
                  fontWeight="500"
                  letterSpacing="2px"
                >
                  {card.title}
                </Heading>
              </Stack>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
