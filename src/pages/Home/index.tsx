import { Hero, FeatureDisplay } from "./components";
import { Box, Center, Heading, Flex } from "@chakra-ui/react";
import { mockData } from "./util/content";

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
        {mockData.map((s) => {
          return <FeatureDisplay heading={s.section} products={s.products} />;
        })}
      </Flex>

      <Box id="footer" as="section" bg="black">
        sflkasdjf
      </Box>
    </>
  );
}
