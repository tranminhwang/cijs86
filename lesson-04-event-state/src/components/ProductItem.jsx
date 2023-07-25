import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="newProducts__item">
      <div className="item__image">
        <img src="./img/p6.jpg" alt="p6" />
        <div className="item__image-child">
          <img src="./img/p5.jpg" alt="p5" />
        </div>
      </div>
      <div className="item__content">
        <h3>My product is the best</h3>
        <p>
          <strong>XL/XXL/S</strong>
        </p>
        <div className="item__text">
          <p>
            <del>$100.000</del>
          </p>
          <p>
            <strong>$70.000</strong>
          </p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
