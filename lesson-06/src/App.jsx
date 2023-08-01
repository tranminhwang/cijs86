import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import { products } from "./mockProducts";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  console.log("productsInCart", productsInCart);

  const addToCartFromApp = (productItem) => {
    // productsInCart.push(productItem);
    // console.log("Products in cart: ", productsInCart);
    // setProductsInCart
    const newProductsInCart = [...productsInCart, productItem];
    setProductsInCart(newProductsInCart);
  };

  return (
    <div>
      <Cart productsInCart={productsInCart} />
      <ProductsList products={products} addToCartFromApp={addToCartFromApp} />
    </div>
  );
}

export default App;
