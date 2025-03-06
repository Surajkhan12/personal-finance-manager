import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get('/api/transactions');
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction._id}>
          <h3>{transaction.type}</h3>
          <p>${transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
