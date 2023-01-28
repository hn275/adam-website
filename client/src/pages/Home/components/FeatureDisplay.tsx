import { Box, Flex, Heading } from "@chakra-ui/react";
import { Product } from "modules/api/types";
import { ShowcaseCard } from "modules/components";

interface PropType {
  heading: string;
  products: Product[];
}

export const FeatureDisplay = ({ heading, products }: PropType) => {
  return (
    <Box as="section" id="wood-working">
      <Heading fontSize="xx-large" pb={3} as="h2">
        {heading}
      </Heading>

      <Flex>
        {products.map((item) => {
          return (
            <ShowcaseCard
              id={item.productID}
              image={item.productImage}
              item={item.productName}
              description={item.productDesc}
              price={item.productPrice}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
