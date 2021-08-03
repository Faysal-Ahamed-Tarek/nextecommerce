const ShopAllProduct_State = [];
export const ShopProduct_reducer = (state = ShopAllProduct_State, action) => {
  switch (action.type) {
    case "Fetch_AllProduct":
      return action.payload;
    case "Sorting_Price": {
      if (action.payload === "LowToHigh") {
        state = state.sort((a, b) => a.price - b.price);
      } else if (action.payload === "HighToLow") {
        state = state.sort((a, b) => b.price - a.price);
      }
      console.log("state from reducer", state);
      return state;
    }
    default:
      return state;
  }
};

const ProductView = true;
export const ProductView_reducer = (state = ProductView, action) => {
  switch (action.type) {
    case "Product_View":
      return !state;
    default:
      return state;
  }
};
