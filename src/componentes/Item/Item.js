import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import "bulma/css/bulma.css";

const Item = ({ id, image, precio, stock, name }) => {

  return (
    <article className="CardItem">
      <header className="header">
        <h4 className="IteamHeader">{name}</h4>
      </header>

      <picture>
        <img src={image} />
      </picture>

      <section>
        <p>Precio: ${precio}</p>
        <p>Stock disponible: {stock}</p>
      </section>

      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
