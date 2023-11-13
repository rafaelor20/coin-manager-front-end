import React, { useEffect, useState } from 'react';
import { Container, Main, Content, CurrentAmount, ButtonsDiv } from './styles';

import getTransactions from '../../hooks/api/getTransactions';

import TransactionContainer from '../../components/Home/TransactionHistory';
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
          <TransactionContainer transactions={transactions}></TransactionContainer>
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
