import type { Dispatch } from "react";

export interface CartItem {
  id: number;
  quantity: number;
  costPerItem: number;
}

// state
export type CartStateType = CartItem[];

// dispatch
interface AddToCart {
  type: "cart/addItem";
  payload: CartItem;
}

interface RemoveFromCart {
  type: "cart/removeItem";
  payload: { id: number };
}

export type CartDispathType = AddToCart | RemoveFromCart;

export interface CartContextType {
  cart: CartStateType;
  cartDispatch: Dispatch<CartDispathType>;
  total: number;
}
