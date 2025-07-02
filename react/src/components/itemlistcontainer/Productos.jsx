import { useEffect, useState } from "react";
import "../itemlistcontainer/itemlist.css";
<<<<<<< HEAD
import { collection, getDocs, getFirestore } from "firebase/firestore";
=======
import { productos } from "../../data/productos.js";
import ItemList from "./Itemlist.jsx";

>>>>>>> a4448a255480737cb26aa5141322a42b36b4c0d4
function Productos() {
  const [items, setItems] = useState([]);

 useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((snapshot) => {
      const productosDB = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(productosDB);
    });
  }, []);

  return <ItemList items={items} />;
}

export default Productos;
