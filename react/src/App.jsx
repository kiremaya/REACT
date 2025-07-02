import { Footer } from "./components/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";
import Productos from "./components/itemlistcontainer/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Nosotros from "./components/Nosotros";
<<<<<<< HEAD
import { CartProvider } from "./context/CartContext";
import { useState,useEffect } from "react";
import {getfirestore,doc,getDoc} from "firebase/firestore";

=======
import Detalles from "./components/itemlistcontainer/Detalles";
>>>>>>> a4448a255480737cb26aa5141322a42b36b4c0d4

function App() {
  const [productos, setProductos] = useState({});
  const db = getfirestore(); 
    
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="productos" element={<Productos />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="productos/:id" element={<Detalles />} />
            <Route path="/" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
