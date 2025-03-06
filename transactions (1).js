const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Transaction = require('../models/Transaction');

// Get all transactions for a user
router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user });
    res.json(transactions);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Add a transaction
router.post('/', auth, async (req, res) => {
  const { type, category, amount, description } = req.body;
  try {
    const newTransaction = new Transaction({
      userId: req.user,
      type,
      category,
      amount,
      description,
    });
    await newTransaction.save();
    res.json(newTransaction);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
