import { useParams } from "react-router-dom";

const ProductDetailComponent = () => {
  const { productId } = useParams();

  return <div>ProductDetailComponent productid {productId}</div>;
};

export default ProductDetailComponent;
