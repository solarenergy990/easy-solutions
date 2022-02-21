import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />

        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
