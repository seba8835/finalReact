import Item from "../Item/Item";

const ItemList = ({ products }) => {
    console.log('PRODUCTOS',products);
  return (
    <div className="Listgroup">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  );
};

export default ItemList;
