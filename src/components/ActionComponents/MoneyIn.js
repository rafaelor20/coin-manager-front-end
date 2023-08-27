import React, { useState } from 'react';
import saveTransactions from '../../hooks/api/saveTransaction';

function MoneyIn({ onClose }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const { saveTransaction } = saveTransactions();

  const handleSaveTransaction = async() => {
    // Validate the input data before saving
    if (description && amount && category) {
      const transactionData = {
        description,
        amount: parseInt(amount),
        category,
      };

      try {
        // Call the saveTransaction function
        await saveTransaction(transactionData);
        // Transaction saved successfully, reset the form
        setDescription('');
        setAmount('');
        setCategory('');
        console.log('Transaction saved!');
        onClose(); // Close the MoneyIn component
      } catch (error) {
        console.error('Error saving transaction:', error);
      }
    } else {
      console.log('Please fill in all the fields.');
    }
  };

  return (
    <div>
      <h3>Money In</h3>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <button onClick={handleSaveTransaction} disabled={!description || !amount || !category}>
        Save
      </button>
    </div>
  );
}

export default MoneyIn;

