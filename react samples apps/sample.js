import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import ProductList from "./Component/ProductList";
import Layout from "./Component/Layout";
import StatusMessage from "./Component/StatusMessage";
import './App.css';


function App() {
   const [cart, setCart] = useState([]);
  const [status, setStatus] = useState("loading");

  const products = [
    { id: 1, name: "Phone", price: 12000 },
    { id: 2, name: "Laptop", price: 45000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  useEffect(() => {
    const timer = setTimeout(() => setStatus("loaded"), 1000);
    return () => clearTimeout(timer); // clean up
  }, [])

  return (
    <Layout>
      <StatusMessage status={status} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <h3>Cart Items: {cart.length}</h3>
    </Layout>
  );
}


export default App;
