import { useEffect, useState } from "react";
import  { productos } from "../../data/productos.js";
import Itemlist from "../itemlistcontainer/Itemlist.jsx";
import "../itemlistcontainer/itemlist.css"
function Productos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    fetchProductos.then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="cards-container">
      <Itemlist items={items} />
    </div>
  );
}

export default Productos;