import { CartContext } from "modules/contexts/cart";
import { useContext } from "react";

export const useCartCtx = () => useContext(CartContext);
