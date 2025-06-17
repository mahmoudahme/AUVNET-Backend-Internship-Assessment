import express from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import { addToWishlist, getWishlist, deleteFromWishlist } from '../controllers/wishlist.controller.js';

const router = express.Router();

router.post('/wishlist', protect, addToWishlist);
router.get('/wishlist', protect, getWishlist);
router.delete('/wishlist/:productId', protect, deleteFromWishlist);

export default router;
