import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MoneyInButton from '../../components/ActionButtons/RegisterMoneyIn';
import MoneyIn from '../../components/ActionComponents/MoneyIn';

import MoneyOut from '../../components/ActionButtons/RegisterMoneyOut';
import Debt from '../../components/ActionButtons/RegisterDebt';
import Credit from '../../components/ActionButtons/RegisterCredit';

import getTransactions from '../../hooks/api/getTransactions';

const Home = () => {
  const { useGetTransactions } = getTransactions();
  const [transactions, setTransactions] = useState([]);
  const [showMoneyIn, setShowMoneyIn] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(0);

  const handleMoneyInButtonClick = () => {
    setShowMoneyIn(true);
  };

  const handleMoneyInClose = () => {
    setShowMoneyIn(false);
  };

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
      <Header>Coin Manager</Header>
      <ActionButtons>
        <MoneyInButton onClick={handleMoneyInButtonClick} />
        <MoneyOut />
      </ActionButtons>
      <Main>
        <LeftButtons>
          <Debt />
          <Credit />
        </LeftButtons>
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
      </Main>
      <Footer>&copy; 2023 Coin Manager. All rights reserved.</Footer>
      {showMoneyIn && <MoneyIn onClose={handleMoneyInClose} />}
    </Container>
  );
};

export default Home;

// Styled components...

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Main = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
`;

const CurrentAmount = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TransactionHistory = styled.div`
  text-align: left;
`;

const Transaction = styled.div`
  margin-bottom: 10px;
`;

const TransactionDate = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const TransactionDescription = styled.span`
  margin-right: 10px;
`;

const TransactionAmount = styled.span`
  color: ${({ isNegative }) => (isNegative ? 'red' : 'green')};
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #888;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LeftButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
