import { CartStateType, CartDispathType } from "./types";

export default (
  state: CartStateType,
  action: CartDispathType
): CartStateType => {
  const { cartItems } = state;

  switch (action.type) {
    case "cart/toggle": {
      const isOpen = !state.isOpen;
      return { ...state, isOpen };
    }

    case "cart/addItem": {
      const itemIndex = cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        cartItems.push(action.payload);
      } else {
        cartItems[itemIndex].quantity++;
      }

      return { ...state, cartItems };
    }

    case "cart/removeItem": {
      const itemIndex = cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItems[itemIndex].quantity === 1) {
        cartItems.filter((item) => item.id !== action.payload.id);
      } else {
        cartItems[itemIndex].quantity--;
      }
      return { ...state, cartItems };
    }

    case "cart/updateTotal": {
      let newTotal = 0;
      state.cartItems.forEach((item) => {
        newTotal += item.quantity * item.costPerItem;
      });

      return { ...state, cartTotal: newTotal };
    }

    default:
      return state;
  }
};
