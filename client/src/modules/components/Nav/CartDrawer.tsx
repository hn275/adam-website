import { Box, Heading, Slide } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartCtx } from "modules/hooks";
export const CartDrawer = () => {
  const {
    cartDispatch,
    cart: { isOpen },
  } = useCartCtx();

  const onToggle = () => cartDispatch({ type: "cart/toggle" });

  return (
    <>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 999 }}>
        <Box bg="orange.50" p="2rem">
          <Heading>What's in the cart?</Heading>
        </Box>
      </Slide>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cart-overlay"
            onClick={onToggle}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(1px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
