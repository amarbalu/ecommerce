import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { ProductListContainer } from "./styles";

const ProductList = () => {
  const products = useSelector((state) => state.products || []);
  return (
    <ProductListContainer className="row">
      {products.map((value) => (
        <ProductCard key={value.id} product={value} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
