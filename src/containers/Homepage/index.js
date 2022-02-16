import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import Login from "../Login";
import ProductList from "../../components/ProductList";
import { fetchProducts } from "../../actions";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), []);
  return (
    <Fragment>
      <NavBar />
      <ProductList />
      <Login />
    </Fragment>
  );
};
export default Homepage;
