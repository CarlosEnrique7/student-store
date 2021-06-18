import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const sidebarAction = () => {
    setOpen(!isOpen);
  };

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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
