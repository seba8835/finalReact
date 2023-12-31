import "./NavBar.css";
import CartWidget from "../componentes/CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar =() =>{
    return(
        <div>
            <h1>Fiambreria</h1>
            <h2>toro y gringo</h2>
        <nav className="NavBar">
            <Link to="/">
                <h3>Pagina Principal</h3>
            </Link>
            <div>
                <NavLink to={`/category/vinos`} className={({isActive})=> isActive ? `ActiveOption`: `Option`}/>
                <NavLink to={`/category/fiambres`} className={({isActive})=> isActive ? `ActiveOption`: `Option`}/>
                <NavLink to={`/category/quesos`} className={({isActive})=> isActive ? `ActiveOption`: `Option`}/>
            </div>
            <CartWidget/>
        </nav>
        </div>
    );
}

export default NavBar