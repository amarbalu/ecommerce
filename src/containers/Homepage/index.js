import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import Login from "../Login";
import ProductList from "../../components/ProductList";
import { fetchProducts } from "../../actions";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), []);
  return (
    <Fragment>
      <ProductList />
      <Login />
    </Fragment>
  );
};
export default Homepage;
