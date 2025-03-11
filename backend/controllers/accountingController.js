import Transaction from '../models/Transaction.js';

export const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id });
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

export const addTransaction = async (req, res, next) => {
  try {
    const { date, description, amount } = req.body;
    const transaction = await Transaction.create({
      user: req.user._id,
      date,
      description,
      amount
    });
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};
