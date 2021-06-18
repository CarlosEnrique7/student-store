import React from "react";
import "./items.css";
import { Route, Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import ItemInfo from "./ItemInfo";

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
