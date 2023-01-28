import { Hero, Climbing } from "./components";
import { Box, Center, Heading } from "@chakra-ui/react";

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

      <Box id="features" as="section" px={10}>
        <Climbing />
      </Box>
    </>
  );
}
