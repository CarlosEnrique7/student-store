import Items from "./Items";
import "./Products.css";

const Products = ({ store }) => {
  console.log("products", store);
  return (
    <div className="products">
      <h2 className="productsTitle">Products</h2>
      <div className="itemsList">
        <Items store={store} />
      </div>
    </div>
  );
};

export default Products;
