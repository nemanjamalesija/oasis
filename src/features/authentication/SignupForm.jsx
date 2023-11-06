import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import AuthLink from '../../ui/AuthLink';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  return (
    <Form>
      <FormRowVertical label='Full name' error={''}>
        <Input type='text' id='fullName' />
      </FormRowVertical>

      <FormRowVertical label='Email address' error={''}>
        <Input type='email' id='email' />
      </FormRowVertical>

      <FormRowVertical
        label='Password (min 8 characters)'
        error={''}
      >
        <Input type='password' id='password' />
      </FormRowVertical>

      <FormRowVertical label='Repeat password' error={''}>
        <Input type='password' id='passwordConfirm' />
      </FormRowVertical>

      <FormRowVertical>
        <Button $size='large'>Create new user</Button>
      </FormRowVertical>

      <AuthLink to='/login' page='Log in'>
        Already have an account?
      </AuthLink>
    </Form>
  );
}

export default SignupForm;
