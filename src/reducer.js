import { storeProducts } from "./data";
const initialState = {
  count: 0,
  products: storeProducts,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
