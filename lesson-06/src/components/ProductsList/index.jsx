import ProductItem from "../ProductItem";
import "./ProductList.css";

const ProductsList = (props) => {
  const { products, addToCartFromApp } = props;

  const productsItems = products.map((product) => (
    <ProductItem
      key={product.id}
      product={product}
      addToCartFromApp={addToCartFromApp}
    />
  ));

  return <div className="products-wrapper">{productsItems}</div>;
};

export default ProductsList;
