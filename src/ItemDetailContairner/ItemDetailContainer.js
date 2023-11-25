// Importaciones
import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../service/Firebase';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const docRef = doc(db, "items", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    getProductById();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
