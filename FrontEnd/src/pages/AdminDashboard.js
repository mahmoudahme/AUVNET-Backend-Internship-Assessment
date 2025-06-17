import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get('/admin/users').then(res => setUsers(res.data));
    API.get('/admin/category').then(res => setCategories(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Users:</h3>
      <ul>{users.map(u => <li key={u._id}>{u.username}</li>)}</ul>
      <h3>Categories:</h3>
      <ul>{categories.map(c => <li key={c._id}>{c.name}</li>)}</ul>
    </div>
  );
}
