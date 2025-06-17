# 🛒 AUVNET Backend Internship Assessment – Frontend

This is the frontend part of the **Simple E-Commerce App** built using **React.js**. It implements basic E-Commerce functionality for both **Users** and **Admins** as required by the internship task.

---

## ✅ Features

### 🚀 Authentication
- Signup for users.
- Login for users and admins.
- JWT token stored in `localStorage`.

### 👤 Roles & Permissions
- Two roles: `admin` and `user`.
- Role-based protected routes.
- Users can only update/delete their own products.

### 🛍️ User Functionalities
- View all products.
- View own products only.
- Add to/view wishlist.

### 🛠️ Admin Functionalities
- View all users.
- View all categories.

---

## 📁 Project Structure

```bash
src/
├── components/
│   └── ProtectedRoute.jsx         # Role-based route protection
├── pages/
│   ├── Signup.jsx                 # Signup form
│   ├── Login.jsx                  # Login form
│   ├── Products.jsx               # View all products
│   ├── MyProducts.jsx             # View only user's own products
│   ├── Wishlist.jsx               # View wishlist items
│   └── AdminDashboard.jsx         # Admin panel (view users + categories)
├── services/
│   └── api.js                     # Axios base instance + interceptors
├── App.jsx                        # Routes definition
└── main.jsx                       # ReactDOM entry point



---

## 🔐 Route Protection

Implemented via `<RequireAuth>` wrapper component:

```jsx
<Route
  path="/admin/dashboard"
  element={
    <RequireAuth role="admin">
      <AdminDashboard />
    </RequireAuth>
  }
/>


🔗 API Endpoints Used
| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| POST   | `/auth/signup`    | Signup user              |
| POST   | `/auth/login`     | Login user or admin      |
| GET    | `/product`        | Get all products         |
| GET    | `/user/wishlist`  | Get user wishlist        |
| GET    | `/admin/users`    | Admin get all users      |
| GET    | `/admin/category` | Admin get all categories |
