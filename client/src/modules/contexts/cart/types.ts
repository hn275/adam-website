import type { Dispatch } from "react";

export interface CartItem {
  id: number;
  quantity: number;
  costPerItem: number;
  title: string;
  description: string;
}

// state
export type CartStateType = {
  cartItems: CartItem[];
  cartTotal: number;
  isOpen: boolean;
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

interface ToggleCart {
  type: "cart/toggle";
}

export type CartDispathType =
  | AddToCart
  | RemoveFromCart
  | UpdateCartTotal
  | ToggleCart;

export interface CartContextType {
  cart: CartStateType;
  cartDispatch: Dispatch<CartDispathType>;
}
