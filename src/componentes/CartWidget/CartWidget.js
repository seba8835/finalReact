import icono from "./Assets/cart.png"

const CartWidget = () => {
    return (
        <div className="icon is-large">
            <img src={icono} alt="cart-widget"/>
            0
        </div>
    );
};

export default CartWidget