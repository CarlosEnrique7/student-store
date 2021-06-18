import { Link } from "react-router-dom";
import "./ItemInfo.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ItemInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  console.log("id", productId);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/${productId}`);
        if (res?.data?.product) {
          setProduct(res.data.product);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [productId]);

  console.log("single item", product);

  return (
    <div className="ItemInfo">
      <div className="wrapper">
        <div className="container">
          <span className="close">
            <Link to="/">&times;</Link>
          </span>
          <img src={product.image} alt="" />
          <h1 className="title">{product.title}</h1>
          <p class="description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
