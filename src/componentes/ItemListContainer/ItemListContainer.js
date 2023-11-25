import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../service/Firebase";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = categoryId
          ? query(collection(db, "items"), where("category", "==", categoryId))
          : collection(db, "items");

        const response = await getDocs(collectionRef);

        const productsAdapted = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsAdapted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
