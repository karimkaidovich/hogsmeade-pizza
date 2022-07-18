import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../assets/img/empty-cart.jpeg";

const EmptyCart: React.FC = () => {
  return (
    <div className="content">
      <div className="cart cart--empty">
        <h2>Oops, it’s empty here!</h2>
        <p>Minimal order delivery value is £10.00</p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link className="button button--black" to="/hogsmeade-pizza">
          <span>Back to menu</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
