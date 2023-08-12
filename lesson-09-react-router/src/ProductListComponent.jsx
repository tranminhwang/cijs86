import { Link } from "react-router-dom";

const ProductListComponent = () => {
  const mockProducts = Array.from({ length: 10 });
  return (
    <div>
      <h1>ProductListComponent</h1>
      <div>
        {mockProducts.map((product, index) => (
          <div key={index}>
            <h3>Product {index + 1}</h3>
            <button>
              <Link to={`/products/${index + 1}`}>View detail</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;
