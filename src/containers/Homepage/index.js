import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import Login from "../Login";
import ProductList from "../../components/ProductList";

const Homepage = () => {
  return (
    <Fragment>
      <NavBar />
      <ProductList />
      <Login />
    </Fragment>
  );
};
export default Homepage;
