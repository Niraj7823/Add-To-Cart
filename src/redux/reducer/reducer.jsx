const initial = {
  carts: [],
};
export const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_CART":
      const IteamIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "DLT_CART":
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        state.carts[ItemIndex_dec].qnty -= 1;

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
