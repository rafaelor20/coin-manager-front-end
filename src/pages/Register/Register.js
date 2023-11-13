import { Container } from './styles';
import Header from '../../components/Register/Header';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

export default function Register(Props) {
  return(
    <Container>
      <Header text={Props.text}/>
      <Input
        label="Value"
        type="number"
      />
      <Input
        label="Description"
        type="string"
      />
      <Button type="submit" color="primary" fullWidth>
            Send
      </Button>
    </Container>
  );
}
