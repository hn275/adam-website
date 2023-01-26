import { Hero } from "./components";
import { Box, Center, Heading } from "@chakra-ui/react";

export function HomePage() {
  return (
    <>
      <Box as="section" id="hero">
        <Hero />

        <Center my="3rem">
          <Heading as="h2" fontStyle="italic" color="brand.main">
            Bizznizz tagline here...
          </Heading>
        </Center>
      </Box>
    </>
  );
}
