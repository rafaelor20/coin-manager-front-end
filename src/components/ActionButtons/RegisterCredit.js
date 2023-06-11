import { useContext } from 'react';
import styled from 'styled-components';

export default function Credit() {
  return (
    <LeftButton>Register Credits</LeftButton>
  );
}

const LeftButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
