import React from 'react';
import { TransactionHistory, Transaction, TransactionDate, TransactionDescription, TransactionAmount } from './css/TransactionHistory';

export default function TransactionContainer(Props) {
  return(
    <TransactionHistory>
      <h3>Transactions:</h3>
      {Props.transactions.map((transaction) => {
        const date = new Date(transaction.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        return (
          <Transaction key={transaction.id}>
            <TransactionDate>{formattedDate}</TransactionDate>
            <TransactionDescription>{transaction.description}</TransactionDescription>
            <TransactionAmount isNegative={transaction.amount < 0}>
              {transaction.amount}
            </TransactionAmount>
          </Transaction>
        );
      })}
    </TransactionHistory>
  );
}
