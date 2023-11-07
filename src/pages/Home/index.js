import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import getTransactions from '../../hooks/api/getTransactions';
import logoutButton from '../../assets/log-out.svg';

import MoneyIn from '../../components/RegisterButtons/RegisterMoneyIn';
import MoneyOut from '../../components/RegisterButtons/RegisterCredit';
import Debt from '../../components/RegisterButtons/RegisterDebt';
import Credit from '../../components/RegisterButtons/RegisterCredit';

import Footer from '../../components/Footer';

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
      <Header>
        Coin Manager
        <Logout src={logoutButton}/>
      </Header>
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
        <ActionButtons>
          <MoneyIn />
          <MoneyOut />
        </ActionButtons>
        <ActionButtons>
          <Credit />
          <Debt />          
        </ActionButtons>
      </Main>
      <Footer />
      {showMoneyIn && <MoneyIn onClose={handleMoneyInClose} />}
    </Container>
  );
};

export default Home;

// Styled components...

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #8C11BE;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`;

const Logout = styled.img`
width: 23px;
height: 24px;
`; 

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const ActionButtons = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  
`;
