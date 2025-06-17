# 🛒 AUVNET Backend Internship Assessment

This is a simple E-Commerce backend application built for the AUVNET backend internship assessment. The system includes two user roles: `Admin` and `User`, and allows basic product, category, and wishlist management.

---

## 🧑‍💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT + bcrypt
- **ORM:** Mongoose
- **Environment Management:** dotenv

---

## 🚀 Features

### 🔐 Authentication & Authorization

- Signup (User)
- Login (User & Admin)
- JWT-based Authentication
- Role-based Authorization (`user`, `admin`)

### 👤 User Functionalities

- View all products
- Create, update, and delete their own products
- Add/remove products to/from wishlist
- View wishlist

### 🛠️ Admin Functionalities

- Login with:
- username: admin
- password: admin

- View, add, update, and delete categories (supports 3-level hierarchy)
- View and delete any user
- View and delete any product

---

## 🗂️ Project Structure
> backend/
> 
> │
> 
> ├── controllers/ // All route controllers
> 
> ├── models/ // Mongoose schemas
> 
> ├── routes/ // Express routes
> 
> ├── middlewares/ // Auth & Role guards
> 
> ├── utils/ // JWT generator
> 
> ├── app.js // Express app config
> 
> ├── server.js // Entry point
> 
> ├── .env // Environment variables
> 
> ├── package.json


---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/AUVNET-Backend-Internship-Assessment.git
cd AUVNET-Backend-Internship-Assessment



2. Install dependencies
npm install


3. Add environment variables
Create a .env file in the root directory:
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=secret123


4. Run the server
npm run dev
Server runs on: http://localhost:5000

📦 Default Admin Account
username: admin
password: admin


📬 API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | /api/auth/signup | Register new user  |
| POST   | /api/auth/login  | Login (user/admin) |


| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | /api/product      | List all products      |
| POST   | /api/product      | Create product (user)  |
| PUT    | /api/product/:id | Update product (owner) |
| DELETE | /api/product/:id | Delete product (owner) |


| Method | Endpoint                       | Description          |
| ------ | ------------------------------ | -------------------- |
| GET    | /api/user/wishlist             | Get wishlist         |
| POST   | /api/user/wishlist             | Add to wishlist      |
| DELETE | /api/user/wishlist/:productId | Remove from wishlist |


| Method | Endpoint                 | Description         |
| ------ | ------------------------ | ------------------- |
| GET    | /api/admin/users         | View all users      |
| DELETE | /api/admin/users/:id    | Delete user         |
| GET    | /api/admin/products      | View all products   |
| DELETE | /api/admin/products/:id | Delete product      |
| GET    | /api/admin/category      | View all categories |
| POST   | /api/admin/category      | Create category     |
| PUT    | /api/admin/category/:id | Update category     |
| DELETE | /api/admin/category/:id | Delete category     |

# API Documentation
https://documenter.getpostman.com/view/19885090/2sB2x8GsHe