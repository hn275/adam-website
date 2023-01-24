import { CartStateType, CartDispathType } from "./types";

export default (
  state: CartStateType,
  action: CartDispathType
): CartStateType => {
  switch (action.type) {
    case "cart/addItem": {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity++;
      }

      return state;
    }

    case "cart/removeItem": {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state[itemIndex].quantity === 1) {
        state.filter((item) => item.id !== action.payload.id);
      } else {
        state[itemIndex].quantity--;
      }
      return state;
    }
  }
};
