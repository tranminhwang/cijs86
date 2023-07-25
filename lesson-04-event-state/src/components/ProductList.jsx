import "./ProductList.css";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <section className="newProducts">
      <h1>News Products</h1>
      <div className="newProducts__container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
}

export default ProductList;
