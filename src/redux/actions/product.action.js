export const getProducts = () => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCT" });
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: json }))
    .catch((err) => {
      dispatch({ type: "FETCH_PRODUCT_FAIL" });
    });
};

export const getProductById = (id) => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCT_BY_ID" });
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) =>
      dispatch({ type: "FETCH_PRODUCT_BY_ID_SUCCESS", payload: json })
    )
    .catch((err) => {
      dispatch({ type: "FETCH_PRODUCT_BY_ID_FAIL" });
    });
};
    