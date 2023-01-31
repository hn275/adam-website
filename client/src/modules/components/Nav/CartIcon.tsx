import { BsCart2 } from "react-icons/bs";
import { Grid, Icon } from "@chakra-ui/react";
import { useCartCtx } from "modules/hooks";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";

export const CartIcon = () => {
  const {
    cart: { cartItems, isOpen },
    cartDispatch,
  } = useCartCtx();

  const onToggle = () => {
    cartDispatch({ type: "cart/toggle" });
  };

  return (
    <>
      <Grid placeItems="center" position="relative">
        <AnimatePresence>
          {cartItems.length !== 0 && (
            <motion.div
              aria-label="cart indicator"
              className="nav-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <Icon
          color={cartItems.length !== 0 ? "gray.600" : "gray.400"}
          as={BsCart2}
          cursor="pointer"
          aria-label="cart"
          onClick={onToggle}
        />
      </Grid>

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
