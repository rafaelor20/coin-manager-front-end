import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '../../components/Link';
import { Container, Main, Content, CurrentAmount, TransactionHistory, Transaction, TransactionDate, TransactionDescription, TransactionAmount, ButtonsDiv } from './styles';

import getTransactions from '../../hooks/api/getTransactions';

import MoneyIn from '../../components/Home/RegisterMoneyIn';
import MoneyOut from '../../components/Home/RegisterMoneyOut';
import Debt from '../../components/Home/RegisterDebt';
import Credit from '../../components/Home/RegisterCredit';

import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';

export default function Home() {
  const { useGetTransactions } = getTransactions();
  const [transactions, setTransactions] = useState([]);
  const [currentAmount, setCurrentAmount] = useState(0);

  useEffect(() => {
    const fetchTransactions = async() => {
      try {
        const response = await useGetTransactions();
        setTransactions(response);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const calculateCurrentAmount = () => {
      const sum = transactions.reduce((total, transaction) => total + transaction.amount, 0);
      setCurrentAmount(sum);
    };

    calculateCurrentAmount();
  }, [transactions]);

  return (
    <Container>
      <Header/>
      <Main>
        <Content>
          <CurrentAmount>Current Amount: ${currentAmount}</CurrentAmount>
          <TransactionHistory>
            <h3>Transaction History</h3>
            {transactions.map((transaction) => (
              <Transaction key={transaction.id}>
                <TransactionDate>{transaction.date}</TransactionDate>
                <TransactionDescription>{transaction.description}</TransactionDescription>
                <TransactionAmount isNegative={transaction.amount < 0}>
                  {transaction.amount}
                </TransactionAmount>
              </Transaction>
            ))}
          </TransactionHistory>
        </Content>
        <ButtonsDiv>
          <MoneyIn />
          <MoneyOut />
        </ButtonsDiv>
        <ButtonsDiv>
          <Credit />
          <Debt />          
        </ButtonsDiv>
      </Main>
      <Footer />
    </Container>
  );
};
