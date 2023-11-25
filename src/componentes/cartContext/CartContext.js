import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  getTotalQuantity: () => 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => false,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    if (quantity > 0) {
      if (!isInCart(item.id)) {
        setCart((prev) => [...prev, { ...item, quantity }]);
      } else {
        alert("El producto ya fue agregado al carrito");
      }
    } else {
      alert("La cantidad debe ser mayor que cero");
    }
  };

  const removeItem = (productId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== productId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        getTotalQuantity,
        addItem,
        removeItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
