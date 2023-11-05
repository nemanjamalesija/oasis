import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';

const LoginForm = () => {
  return (
    <Form>
      <FormRowVertical label='Email adress'>
        <Input type='email' />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input type='password' />
      </FormRowVertical>
      <Button $size='large'>Log in</Button>
    </Form>
  );
};

export default LoginForm;
