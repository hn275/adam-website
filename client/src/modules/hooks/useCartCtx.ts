import { CartContext } from "modules/contexts/cart";
import { useContext, useEffect } from "react";

export const useCartCtx = () => {
  const ctx = useContext(CartContext);

  useEffect(() => {
    ctx.cartDispatch({ type: "cart/updateTotal" });
  }, [ctx.cart.cartItems]);

  return ctx;
};
