import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import AuthLink from '../../ui/AuthLink';
import { useForm } from 'react-hook-form';

function SignupForm() {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRowVertical
        label='Full name'
        error={errors?.fullName?.message}
      >
        <Input
          type='text'
          id='fullName'
          {...register('fullName', {
            required: 'Please enter your full name.',
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label='Email address'
        error={errors?.email?.message}
      >
        <Input
          type='email'
          id='email'
          {...register('email', {
            required: 'Email is required.',
            validate: {
              maxLength: (v) =>
                v.length <= 50 ||
                'The email should have at most 50 characters',
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                  v
                ) || 'Email address is not valid.',
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label='Password (min 8 characters)'
        error={errors?.password?.message}
      >
        <Input
          type='password'
          id='password'
          {...register('password', {
            required: 'Password  is required',
            validate: (value) =>
              value.length < 8 &&
              'Password must be at least 8 characters long.',
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label='Confirm password'
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type='password'
          id='passwordConfirm'
          {...register('passwordConfirm', {
            required: 'Please confirm your pasword.',
            validate: (value) =>
              !value.includes(getValues().password) &&
              'Password and password confirmation must match.',
          })}
        />
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
