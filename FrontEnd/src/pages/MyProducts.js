import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/product').then((res) => {
      const myId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id;
      const filtered = res.data.filter(p => p.owner._id === myId);
      setProducts(filtered);
    });
  }, []);

  return (
    <div>
      <h2>My Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.title} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

