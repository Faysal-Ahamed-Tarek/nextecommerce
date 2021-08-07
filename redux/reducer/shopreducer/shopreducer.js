const InitialState = {
  Products: [],
  DefaultProducts: [],
  FilterCategory: [],
};
export const ShopProduct_reducer = (state = InitialState, action) => {
  switch (action.type) {
    //All Fetch Product Store In Redux State
    case "Fetch_AllProduct":
      return {
        ...state,
        Products: action.payload,
        DefaultProducts: action.payload,
      };

    //Product Sorting According to the Price
    case "Sorting_Price": {
      if (action.payload === "LowToHigh") {
        return {
          ...state,
          Products: state.Products.slice().sort((a, b) => a.price - b.price),
        };
      } else if (action.payload === "HighToLow") {
        return {
          ...state,
          Products: state.Products.slice().sort((a, b) => b.price - a.price),
        };
      } else {
        return {
          ...state,
          Products: state.DefaultProducts,
        };
      }
    }

    //Product Sorting According to the Category
    case "SearchByCategory": {
      const Data = state.Products.filter((Product) => {
        return state.FilterCategory.map((item) =>
          console.log(item, Product.category)
        );
      });

      if (!state.FilterCategory.includes(action.payload)) {
        return {
          ...state,
          FilterCategory: [...state.FilterCategory, action.payload],
          Products: state.DefaultProducts.filter((Product) =>
            [...state.FilterCategory, action.payload].includes(Product.category)
          ),
        };
      } else {
        const DltCategory = state.FilterCategory.filter(
          (Item) => Item !== action.payload
        );
        return {
          ...state,
          FilterCategory: DltCategory,
          Products: state.DefaultProducts.filter((Product) =>
            DltCategory.includes(Product.category)
          ),
        };
      }
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
