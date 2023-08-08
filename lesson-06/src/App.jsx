// import "./App.css";
// import Cart from "./components/Cart";
// import ProductsList from "./components/ProductsList";
// import { products } from "./mockProducts";

import { useState, createContext, useContext } from "react";

// export const ProductContext = createContext();

// function App() {
//   const [productsInCart, setProductsInCart] = useState([]);

//   const addToCartFromApp = (productItem) => {
//     const newProductsInCart = [...productsInCart, productItem];
//     setProductsInCart(newProductsInCart);
//   };

//   return (
//     <div>
//       <ProductContext.Provider
//         value={{
//           productsInCart,
//           products,
//           addToCartFromApp,
//         }}
//       >
//         <Cart />
//         <ProductsList />
//       </ProductContext.Provider>
//     </div>
//   );
// }

// export default App;

const CountContext = createContext();
// provider, consumer

const MultipleLanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("vi");

  const switchLanguage = () => {
    if (language === "vi") {
      setLanguage("en");
    } else {
      setLanguage("vi");
    }
  };

  return (
    <div>
      <button onClick={switchLanguage}>
        {language === "vi" ? "Chuyển ngôn ngữ" : "Switch language"}
      </button>
      {language === "vi" ? (
        <h4>Xin chào từ thành phần App</h4>
      ) : (
        <h4>Hello from component App</h4>
      )}
      <MultipleLanguageContext.Provider
        value={{
          language,
          setLanguage,
        }}
      >
        <ComponentA />
        <ComponentE />
      </MultipleLanguageContext.Provider>
    </div>
  );
}

function ComponentA() {
  console.log("render: ComponentA");
  const { language } = useContext(MultipleLanguageContext);
  const [count, setCount] = useState(0);
  console.log("render: App");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {language === "vi" ? (
        <h4>Xin chào từ thành phần A: {count}</h4>
      ) : (
        <h4>Hello from component A: {count}</h4>
      )}
      <CountContext.Provider
        value={{
          count,
          increaseCount,
          decreaseCount,
        }}
      >
        <ComponentB />
      </CountContext.Provider>
    </div>
  );
}
function ComponentB() {
  console.log("render: ComponentB");
  const { count, increaseCount, decreaseCount } = useContext(CountContext);
  const { language } = useContext(MultipleLanguageContext);

  return (
    <div>
      {language === "vi" ? (
        <h4>Xin chào từ thành phần B: {count}</h4>
      ) : (
        <h4>Hello from component B: {count}</h4>
      )}
      <button onClick={increaseCount}>B+</button>
      <button onClick={decreaseCount}>B-</button>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  console.log("render: ComponentC");
  const { language } = useContext(MultipleLanguageContext);

  return (
    <div>
      {language === "vi" ? (
        <h4>Xin chào từ thành phần C</h4>
      ) : (
        <h4>Hello from component C</h4>
      )}
      <ComponentD />
    </div>
  );
}

function ComponentD() {
  console.log("render: ComponentD");
  const { count, increaseCount, decreaseCount } = useContext(CountContext);
  const { language } = useContext(MultipleLanguageContext);

  return (
    <div>
      {language === "vi" ? (
        <h4>Xin chào từ thành phần D</h4>
      ) : (
        <h4>Hello from component D</h4>
      )}
      <h5>Count is: {count}</h5>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

function ComponentE() {
  const { language } = useContext(MultipleLanguageContext);

  return (
    <div>
      {language === "vi" ? (
        <h4>Xin chào từ thành phần D</h4>
      ) : (
        <h4>Hello from component D</h4>
      )}
    </div>
  );
}

export default App;
