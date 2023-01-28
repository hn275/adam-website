import { Box, Heading } from "@chakra-ui/react";
import { ShowcaseCard } from "modules/components";

export const Printing = () => {
  return (
    <Box as="section" id="wood-working">
      <Heading fontSize="xx-large" pb={3} as="h2">
        3D Printing
      </Heading>
      <ShowcaseCard
        id={1}
        image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        item={"Test"}
        description={
          "This is a test item to display the showcase card component"
        }
        price={69}
      />
    </Box>
  );
};
