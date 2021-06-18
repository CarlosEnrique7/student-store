import React from "react";
import "./items.css";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const Items = ({ store }) => {
  return (
    <div className="items">
      {store.map((item) => (
        <div>
          <Link to={"/" + item.id}>
            <ItemCard item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;
