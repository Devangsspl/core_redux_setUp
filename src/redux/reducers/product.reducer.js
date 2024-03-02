const initialState = {
  products: [],
  productData: {},
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Products
    case "FETCH_PRODUCT":
      return { ...state, loading: true };
    case "FETCH_PRODUCT_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_PRODUCT_FAIL":
      return { ...state, loading: false, products: [] };

    // Fetch Product BY Id
    case "FETCH_PRODUCT_BY_ID":
      return { ...state, loading: true };
    case "FETCH_PRODUCT_BY_ID_SUCCESS":
      return { ...state, loading: false, productData: action.payload };
    case "FETCH_PRODUCT_BY_ID_FAIL":
      return { ...state, loading: false, productData: {} };

    default:
      return state;
  }
};
