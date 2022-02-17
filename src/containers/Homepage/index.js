import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../actions";
import ProductList from "../../components/ProductList";
import Sidebar from "../../components/SideBar";

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
    </div>
  );
};
export default Homepage;
