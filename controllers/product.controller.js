import Product from '../models/product.model.js';

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body, owner: req.user.id });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find().populate('category').populate('owner', 'username');
  res.json(products);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product || product.owner.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  Object.assign(product, req.body);
  await product.save();
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product || product.owner.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await product.deleteOne();
  res.json({ message: 'Product deleted' });
};
