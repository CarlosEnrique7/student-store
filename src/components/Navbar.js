import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ cart }) => {
  const [isOpen, setOpen] = useState(false);

  const sidebarAction = () => {
    setOpen(!isOpen);
  };

  let total = 0;

  return (
    <div className={isOpen ? "nav open" : "nav closed"}>
      <div className="icons">
        <i
          className={isOpen ? "left-arrow fas fa-arrow-circle-left" : "fas fa-arrow-circle-right"}
          onClick={sidebarAction}
        ></i>
        <div className="shopping-icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-dollar-sign"></i>
          <i className="fas fa-receipt"></i>
        </div>
        {isOpen && (
          <div className="sidebar">
            <h2 className="shoppingTitle">
              Shopping Cart <i className="fas fa-shopping-cart"></i>
            </h2>
            {cart.map((item) => (
              <div className="cartList">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p className="invis">{(total += item.price)}</p>
              </div>
            ))}
            <p className="total">
              Total: <span>{parseFloat(total).toFixed(2)}</span>
            </p>
            {/* <form action="/orders" method="POST">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="email@email.com" />
            </form> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
