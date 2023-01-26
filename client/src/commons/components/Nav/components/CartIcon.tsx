import { BsCart2 } from "react-icons/bs";
import { Box, Grid, Icon } from "@chakra-ui/react";
import { useCartCtx } from "modules/hooks";

export const CartIcon = () => {
  const {
    cart: { cartItems },
  } = useCartCtx();
  return (
    <>
      <Grid
        placeItems="center"
        position="relative"
        style={{ isolation: "isolate" }}
      >
        {cartItems.length !== 0 && (
          <Box
            fontSize="xs"
            position="absolute"
            transform="translate(10px,-10px)"
            borderRadius="full"
            bg="orange.400"
            h={2}
            w={2}
            justifyContent="center"
            color="white"
            style={{ zIndex: -1 }}
          />
        )}
        <Icon style={{ zIndex: 1 }} as={BsCart2} cursor="pointer" />
      </Grid>
    </>
  );
};
