import React, { useContext, useState } from "react";
import ItemCount from "../componentes/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../componentes/cartContext/CartContext"; // Importa el contexto

const ItemDetail = ({ id, image, precio, stock, name, category }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext); // Usa el hook useContext para obtener el contexto

  const handleOnAdd = (quantity) => {
    if (quantity <= stock) {
      setQuantityAdded(quantity);
      const item = { id, image, precio, stock, name };
      addItem(item, quantity);
    } else {
      alert("La cantidad solicitada excede el stock disponible");
    }
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={image} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Precio: ${precio}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Ver Carrito
          </Link>
        ) : (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={handleOnAdd}
          />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
