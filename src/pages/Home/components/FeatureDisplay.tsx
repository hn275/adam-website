import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Product } from "modules/api/types";
import { ShowcaseCard } from "modules/components";

interface PropType {
  heading: string;
  products: Product[];
}

export const FeatureDisplay = ({ heading, products }: PropType) => {
  return (
    <Box as="section" id={heading.toLowerCase().replace(" ", "-")}>
      <Heading fontSize="xx-large" pb={3} ml="1rem" as="h2">
        {heading}
      </Heading>

      <Wrap spacing={10} justify="center">
        {products.map((item) => {
          return (
            <WrapItem key={item.productID}>
              <ShowcaseCard
                key={item.productID}
                id={item.productID}
                image={item.productImage}
                item={item.productName}
                description={item.productDesc}
                price={item.productPrice}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};
