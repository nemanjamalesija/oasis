import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import { useLogin } from './useLogin';

const LoginForm = () => {
  const { login, isLoggingIn } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login({ ...data });
  };

  const onError = (errors) => console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRowVertical
        label='Email adress'
        error={errors?.email?.message}
      >
        <Input
          type='email'
          {...register('email', {
            required: 'Email is required.',
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label='Password'
        error={errors?.password?.message}
      >
        <Input
          type='password'
          {...register('password', {
            required: 'Password  is required',
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button $size='large' disabled={isLoggingIn}>
          Log in
        </Button>
      </FormRowVertical>
    </Form>
  );
};

export default LoginForm;
