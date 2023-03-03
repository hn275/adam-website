import { createContext, useReducer } from "react";
import reducer from "./reducer";
import type { CartStateType, CartContextType } from "./types";

const init: CartStateType = {
  cartItems: [],
  cartTotal: 0,
  isOpen: false,
};

const CartContext = createContext<CartContextType>({} as CartContextType);

interface ProviderPropType {
  children: React.ReactNode;
}

const CartCtxProvider = ({ children }: ProviderPropType) => {
  const [cart, cartDispatch] = useReducer(reducer, init);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartCtxProvider };
