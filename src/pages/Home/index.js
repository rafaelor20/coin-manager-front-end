import { useContext } from 'react';
import styled from 'styled-components';
import MoneyIn from '../../components/ActionButtons/RegisterMoneyIn';
import MoneyOut from '../../components/ActionButtons/RegisterMoneyOut';
import Debt from '../../components/ActionButtons/RegisterDebt';
import Credit from '../../components/ActionButtons/RegisterCredit';

const Home = () => {
  return (
    <Container>
      <Header>Coin Manager</Header>
      <ActionButtons>
        <MoneyIn />
        <MoneyOut />
      </ActionButtons>
      <Main>
        <LeftButtons>
          <Debt />
          <Credit />
        </LeftButtons>
        <Content>
          <CurrentAmount>Current Amount: $500</CurrentAmount>
          <TransactionHistory>
            <h3>Transaction History</h3>
            <Transaction>
              <TransactionDate>June 1, 2023</TransactionDate>
              <TransactionDescription>Grocery Shopping</TransactionDescription>
              <TransactionAmount isNegative={true}>-$50</TransactionAmount>
            </Transaction>
            <Transaction>
              <TransactionDate>May 28, 2023</TransactionDate>
              <TransactionDescription>Dinner at Restaurant</TransactionDescription>
              <TransactionAmount isNegative={true}>-$30</TransactionAmount>
            </Transaction>
            <Transaction>
              <TransactionDate>May 25, 2023</TransactionDate>
              <TransactionDescription>Gas Refill</TransactionDescription>
              <TransactionAmount isNegative={true}>-$20</TransactionAmount>
            </Transaction>
          </TransactionHistory>
        </Content>
      </Main>
      <Footer>&copy; 2023 Coin Manager. All rights reserved.</Footer>
    </Container>
  );
};

export default Home;

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
