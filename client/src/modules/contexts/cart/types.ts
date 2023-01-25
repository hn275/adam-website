import type { Dispatch } from "react";

export interface CartItem {
  id: number;
  quantity: number;
  costPerItem: number;
}

// state
export type CartStateType = {
  cartItems: CartItem[];
  cartTotal: number;
};

// dispatch
interface AddToCart {
  type: "cart/addItem";
  payload: CartItem;
}

interface RemoveFromCart {
  type: "cart/removeItem";
  payload: { id: number };
}

interface UpdateCartTotal {
  type: "cart/updateTotal";
}

export type CartDispathType = AddToCart | RemoveFromCart | UpdateCartTotal;

export interface CartContextType {
  cart: CartStateType;
  cartDispatch: Dispatch<CartDispathType>;
}
