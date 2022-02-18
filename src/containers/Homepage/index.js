import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../actions";
import ProductList from "../../components/ProductList";
import Sidebar from "../../components/SideBar";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), []);
  return (
    <div className="row container-fluid">
      <div className="d-none d-sm-none d-lg-block  col-lg-2 col-xl-2">
        <Sidebar />
      </div>
      <div className="col-xs-12 col-md-12 col-lg-10 col-xl-10">
        <ProductList />
      </div>
    </div>
  );
};
export default Homepage;
