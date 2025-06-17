import Wishlist from '../models/wishlist.model.js';

export const addToWishlist = async (req, res) => {
  const exists = await Wishlist.findOne({ user: req.user.id, product: req.body.product });
  if (exists) return res.status(400).json({ message: 'Already in wishlist' });

  const item = await Wishlist.create({ user: req.user.id, product: req.body.product });
  res.status(201).json(item);
};

export const getWishlist = async (req, res) => {
  const wishlist = await Wishlist.find({ user: req.user.id }).populate('product');
  res.json(wishlist);
};

export const deleteFromWishlist = async (req, res) => {
  await Wishlist.findOneAndDelete({ user: req.user.id, product: req.params.productId });
  res.json({ message: 'Removed from wishlist' });
};
