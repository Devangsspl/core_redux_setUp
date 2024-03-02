import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { descreaseCount, inscreaseCount } from "./redux/actions/auth.action";
import { getProductById, getProducts } from "./redux/actions/product.action";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.authReducer);
  const { products } = useSelector((state) => state.productReducer);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductById(10));
  }, []);
  return (
    <div>
      <button onClick={() => dispatch(inscreaseCount())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(descreaseCount())}>-</button>
    </div>
  );
};

export default App;
