import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Login from "../Login";
import { fetchProducts } from "../../actions";
import ProductList from "../../components/ProductList";
import Sidebar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <ProductList />
        </div>
      </div>
      <Login />
    </div>
  );
};
export default Homepage;
