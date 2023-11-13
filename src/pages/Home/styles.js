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

export const ButtonsDiv = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
