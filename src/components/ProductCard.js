import "./ProductCard.css";

function ProductCard(props) {
  const { name, price, inStock } = props;

  return (
    <div className="product-card">
      <div className="image-placeholder"></div>

      <h2>{name}</h2>
      <p className="price">${price}</p>

      {inStock ? (
        <span className="badge in-stock">In Stock</span>
      ) : (
        <span className="badge out-of-stock">Out of Stock</span>
      )}
    </div>
  );
}

export default ProductCard;