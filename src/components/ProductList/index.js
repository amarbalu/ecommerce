import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { ProductListContainer } from "./styles";

const ProductList = () => {
  const products = useSelector((state) => state.products || []);
  return (
    <ProductListContainer>
      {products.map((value) => (
        <ProductCard product={value} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
