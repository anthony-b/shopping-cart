import React, { useState } from "react";
import "./App.css";
import Header from "./componenets/Header";
import Catalogue from "./componenets/Catalogue";
import Cart from "./componenets/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart[product.id];
      return{...prevCart,
        [product.id]: existing
          ? { ...existing, quantity: existing.quantity + 1 }
          : { ...product, quantity: 1 },
      };
    })
  }

   const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart[productId];
      if (!existing) return prevCart;
      if (existing.quantity === 1) {
        const { [productId]: _, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [productId]: { ...existing, quantity: existing.quantity - 1 },
      };
    });
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Catalogue  addToCart={addToCart}/>
        <Cart cart={cart} removeFromCart={removeFromCart}/>
      </div>
    </div>
  );
}

export default App;
