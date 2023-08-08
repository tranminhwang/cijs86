import { useContext } from "react";
import ProductItem from "../ProductItem";
import "./ProductList.css";
import { ProductContext } from "../../App";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  const productsItems = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return <div className="products-wrapper">{productsItems}</div>;
};

export default ProductsList;
