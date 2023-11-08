import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #8C11BE;
  font-family: Arial, sans-serif;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
`;

export const CurrentAmount = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TransactionHistory = styled.div`
  text-align: left;
`;

export const Transaction = styled.div`
  margin-bottom: 10px;
`;

export const TransactionDate = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const TransactionDescription = styled.span`
  margin-right: 10px;
`;

export const TransactionAmount = styled.span`
  color: ${({ isNegative }) => (isNegative ? 'red' : 'green')};
`;

export const ButtonsDiv = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
