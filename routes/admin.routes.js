import express from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import { isAdmin } from '../middlewares/role.middleware.js';
import { createCategory, getAllCategories, updateCategory, deleteCategory } from '../controllers/category.controller.js';
import User from '../models/user.model.js';
import Product from '../models/product.model.js';

const router = express.Router();

router.use(protect, isAdmin);

// Category
router.post('/category', createCategory);
router.get('/category', getAllCategories);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

// Admin manage users/products
router.get('/users', async (req, res) => {
  const users = await User.find({ type: 'user' });
  res.json(users);
});
router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
router.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

export default router;
