import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import Login from "../Login";

const Homepage = () => {
  return (
    <Fragment>
      <NavBar />
      {/* <ProductCard /> */}
      <Login />
    </Fragment>
  );
};
export default Homepage;
