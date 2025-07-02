<<<<<<< HEAD
import React from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../data/productos";
import { useCart } from "../../context/CartContext";

function Producto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));
  const { cart, addToCart } = useCart();
  const enCarrito = cart.find((item) => item.id === producto?.id);
  const cantidad = enCarrito ? enCarrito.cantidad : 0;

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => addToCart(producto)} disabled={cantidad >= 5}>
        {cantidad >= 5 ? "Máximo en carrito" : "Comprar"}
      </button>
      {cantidad > 0 && <p>En carrito: {cantidad}</p>}
    </div>
=======
import { Link } from "react-router-dom";


function Producto({ id, nombre, precio, descripcion }) {
  return (
    <Link to={`/productos/${id}`} >
      <div className="card">
        <div className="card-title">{nombre}</div>
        <div className="card-price">${precio}</div>
      </div>
    </Link>
>>>>>>> a4448a255480737cb26aa5141322a42b36b4c0d4
  );
}

export default Producto;