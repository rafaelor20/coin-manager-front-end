import { Container } from './styles';
import Header from '../../components/Register/Header';

export default function Register(Props) {
  return(
    <Container>
      <Header text={Props.text}/>
    </Container>
  );
}
