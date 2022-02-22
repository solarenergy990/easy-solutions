import React from "react";
import Header from "../Header/Header";
import Product from "../../pages/Product/Product";
import Container from "../Container/Container";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Container>
          <Header />
        </Container>
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
