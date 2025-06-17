import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get('/user/wishlist').then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.product.title}</li>
        ))}
      </ul>
    </div>
  );
}