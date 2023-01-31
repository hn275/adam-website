import { useDisclosure, Slide, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartCtx } from "modules/hooks";
import { CartIcon } from "./CartIcon";
import "./style.css";

export const Cart = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { cart } = useCartCtx();
  return (
    <>
      <CartIcon handleClick={onToggle} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overlay"
            onClick={onToggle}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(1px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          ></motion.div>
        )}
      </AnimatePresence>

      <Slide direction="bottom" in={isOpen}>
        <Box bg="orange.300" p="2rem" shadow="xl">
          {cart.cartItems.map((item) => {
            return (
              <Box key={item.id}>
                {item.title}
                {item.description}
                {item.costPerItem} | {item.quantity}
              </Box>
            );
          })}
        </Box>
      </Slide>
    </>
  );
};
