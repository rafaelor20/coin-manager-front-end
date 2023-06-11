import { useContext } from 'react';
import styled from 'styled-components';

export default function MoneyIn() {
  return (
    <ActionButton>Register Money In</ActionButton>
  );
}

const ActionButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
