import "./ItemDetail.css"
import ItemCount from "../componentes/ItemCount/ItemCount";
import CartContext from "../componentes/cartContext/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ id, name, img, category, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {id,name,price,};

    addItem(item, quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar Compra
          </Link>
        ) : (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={(quantity) => console.log("ya se encuentra agregado", quantity)}
          />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;