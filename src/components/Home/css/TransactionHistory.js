import styled from 'styled-components';

export const TransactionHistory = styled.div`
  text-align: left;
  h3{
    margin-bottom: 5px;
  }
`;

export const Transaction = styled.div`
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
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
