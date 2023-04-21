import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Shop from './components/Shop';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setBackendData(data));
  }, [backendData]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            exact
            path='/'
            element={<Shop products={backendData.products} />}
          />
          <Route
            path='/products'
            element={<Products products={backendData.products} />}
          />
          <Route
            path='/products/:productId'
            element={<ProductDetails products={backendData.products} />}
          />
          <Route path='/add-product' element={<AddProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
