import { Hero } from "./components";
import { Box, Center, Heading } from "@chakra-ui/react";
import { ShowcaseCard } from "commons/components";

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

      <ShowcaseCard
        image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        heading={"Test"}
        description={
          "This is a test item to display the showcase card component"
        }
        price={69}
      />
    </>
  );
}
