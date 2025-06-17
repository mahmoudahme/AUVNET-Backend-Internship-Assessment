import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Products from './pages/Products';
import MyProducts from './pages/MyProducts';
import Wishlist from './pages/Wishlist';
import AdminDashboard from './pages/AdminDashboard';

const RequireAuth = ({ children, role }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;
  const user = JSON.parse(atob(token.split('.')[1]));
  if (role && user.type !== role) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<RequireAuth><Products /></RequireAuth>} />
      <Route path="/my-products" element={<RequireAuth><MyProducts /></RequireAuth>} />
      <Route path="/wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
      <Route path="/admin/dashboard" element={<RequireAuth role="admin"><AdminDashboard /></RequireAuth>} />
    </Routes>
  );
}

export default App;