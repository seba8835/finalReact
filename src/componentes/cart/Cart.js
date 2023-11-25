import React, { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import "bulma/css/bulma.css";

const Cart = () => {
  const { cart, clearCart, getTotalQuantity, total } = useContext(CartContext);

  if (getTotalQuantity() === 0) {
    return (
      <div className="cart_final">
        <h1>vacio</h1>
        <Link to="/" className="btnFooter">
          Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cart_final">
      {cart.map((item) => (
        <CartItem key={item.id} products={item} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart} className="btn_limpiar">
        vaciar carrito
      </button>
      <Link to="/checkout" className="btn_check">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
