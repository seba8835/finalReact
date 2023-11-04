import "./Item.css"
import "bulma/css/bulma.css";

const Item = ({id, prod, img, price, stock}) =>{
    return(
        <article className="CardItem">
            <header className="header">
                <h2 className="IteamHeader">
                    {prod}
                </h2>
            </header>

            <picture>
                <img src={img} alt= {prod} className="ItemImg"/>
            </picture>

            <section>
                <P className="info">
                    Precio: ${price}
                </P>
                
                <P className="info">
                    stock disponible: {stock}
                </P>
            </section>

            <footer className="ItemFooter">
                <link to= {`/item/${id}`} className="Option">Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item;