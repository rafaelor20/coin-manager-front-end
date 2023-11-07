import { useContext } from 'react';
import RegisterButton from './css/RegisterButton';

const MoneyInButton = ({ onClick }) => {
  return (
    <RegisterButton onClick={onClick}>Register Money In</RegisterButton>
  );
};

export default MoneyInButton;
