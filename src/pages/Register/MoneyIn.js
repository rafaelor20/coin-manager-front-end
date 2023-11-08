import styled from 'styled-components';

import Header from '../../components/Register/Header';

export default function MoneyIn() {
  return (
    <Container>
      <Header text="Money in"/>
    </Container>
  );
}

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
