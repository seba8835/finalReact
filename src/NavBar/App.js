import "bulma/css/bulma.css";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import Cart from "../componentes/cart/Cart";
import ItemDetailContainer from "../ItemDetailContairner/ItemDetailContainer";
import CheckOut from "../componentes/checkout/Checkout";
import CartContext from "../componentes/cartContext/CartContext";

function App(){

    return (
        <div className="App">
            <BrowserRouter>
            <CartContext>
            <NavBar/>
            <Routes>
                <Route path="/" element= {<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
                <Route path="/item/:itemId" element= { <ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </CartContext>
            </BrowserRouter>
       </div>
    );
}

export default App;