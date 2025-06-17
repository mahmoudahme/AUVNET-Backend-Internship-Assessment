import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/product').then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.title} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}