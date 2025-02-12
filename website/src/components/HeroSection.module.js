import { Box, Flex, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export function HeroSection() {
  return (
    <>
      <Box
        position="relative"
        flex={1}
        w="full"
        h={{ base: "50vh", md: "100vh" }}
        overflow="hidden"
      >
        {/* Imagem de fundo com ajustes */}
        <Image
          src="/taxator.svg"
          alt="Taxator"
          w="full"
          h="full"
          objectFit="cover"
          objectPosition="top center"
          userSelect="none"
          pointerEvents="none"
          filter="brightness(0.8) contrast(0.9) blur(0.16vmin)"
          borderBottomEndRadius={useBreakpointValue({base: 0, md: "10%"})}
        />

        {/* Overlay com degradê dinâmico */}
        <Box
          position="absolute"
          opacity={useBreakpointValue({ base: 0, md: 1 })}
          top={0}
          left={"81%"}
          w={"20%"}
          h={"100%"}
          bg={`linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`}
        />

        <Box
          position="absolute"
          top={"81%"}
          left={0}
          w={"100%"}
          h={"20%"}
          bg={`linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`}
        />
      </Box>

      {/* Conteúdo */}
      <Flex
        flex={1}
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        color="white"
        px={{ base: 4, md: 8 }}
      >
        {/* Animação no título */}
        <MotionHeading
          size={useBreakpointValue({ base: "xl", md: "2xl" })}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          TAXES AND MORE TAXES
        </MotionHeading>

        {/* Animação no texto */}
        <MotionText
          fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          opacity={0.8}
          maxW="600px"
          mt={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Tired of getting nothing for your taxes? <strong>TAX</strong> is the only tax
          where you can expect something back.
        </MotionText>
      </Flex>
    </>
  );
}
