import { createContext, useMemo, useReducer } from "react";
import reducer from "./reducer";
import type { CartStateType, CartContextType } from "./types";

const init: CartStateType = [];

const CartContext = createContext<CartContextType>({} as CartContextType);

interface ProviderPropType {
  children: React.ReactNode;
}

const CartCtxProvider = ({ children }: ProviderPropType) => {
  const [cart, cartDispatch] = useReducer(reducer, init);

  const total = useMemo(() => {
    let t = 0;
    for (const item of cart) {
      t += item.quantity * item.costPerItem;
    }

    return t;
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, cartDispatch, total }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartCtxProvider };
