import { useContext, useState } from "react";
import { CartContext } from "../cartContext/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from service/firebase;

const CheckOut = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cartList, totalPrice, removeList } = useContext(CartContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email != email2) {
      alert("Los email deben coincidir");
      return;
    }

    const userData = {name,phone,email,};

    createOrder(userData);
  };

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {name,phone,email,},
        items: cartList,
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, "orders");

      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);

      removeList();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="title has-text-centered">estamos gestionando su pedido...</h1>;
  }

  if (orderId) {
    return <h1 className="title has-text-centered">El id de su pedido es: {orderId}</h1>;
  }

  return (
    <div className="container">
      <h1 className="title has-text-centered">Checkout</h1>
      <form
        className="box"
        style={{ maxWidth: "600px", marginTop: "20px", marginLeft: "auto", marginRight: "auto" }}
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nombre Apellido"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Teléfono</label>
          <div className="control">
            <input
              className="input"
              type="tel"
              placeholder="999"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Confirmar Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="example@example.com"
              value={email2}
              onChange={({ target }) => setEmail2(target.value)}
              required
            />
          </div>
        </div>

        <button className="button is-info">Crear Orden</button>
      </form>
    </div>
  );
};

export default CheckOut;