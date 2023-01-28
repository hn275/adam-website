import { Hero, Climbing, WoodWorking, Printing } from "./components";
import { Box, Center, Heading, Flex } from "@chakra-ui/react";

export function HomePage() {
  return (
    <>
      <Box id="hero" as="section">
        <Hero />

        <Center my="3rem">
          <Heading as="h2" fontStyle="italic" color="brand.main">
            Bizznizz tagline here...
          </Heading>
        </Center>
      </Box>

      <Flex id="features" as="section" px={10} direction="column" gap={10}>
        <Climbing />
        <WoodWorking />
        <Printing />
      </Flex>
    </>
  );
}
