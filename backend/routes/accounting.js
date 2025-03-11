import express from 'express';
import { getTransactions, addTransaction } from '../controllers/accountingController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/transactions', protect, getTransactions);
router.post('/transactions', protect, addTransaction);

export default router;
