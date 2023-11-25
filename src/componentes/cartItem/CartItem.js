import React, { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";

const CartItem = ({ products }) => {
  const { removeItem } = useContext(CartContext);
console.log('cart',products);
  return (
    <div className='container'>
      <picture>
        <img src={products.image} alt={products.name} className="imgContainer" />
      </picture>
      <div className='productsCategorie'>
        <h2>{products.name}</h2>
        <p>Cantidad: {products.quantity}</p>
        <p>Subtotal: ${(products.precio)*(products.quantity)}</p>
        <button onClick={() => removeItem(products.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
