import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import AuthLink from '../../ui/AuthLink';
import SpinnerMini from '../../ui/SpinnerMini';
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';

function SignupForm() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { isLoading, signup } = useSignup();

  const onSubmit = (data) => {
    console.log(data);
    signup(data);
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
    reset();
  };

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
                'The email should have at most 50 characters.',
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                  value
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
            minLength: {
              value: 8,
              message:
                'Password must have at least 8 characters.',
            },
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
            required: true,
            validate: (value) => {
              if (watch('password') !== value) {
                return 'Password and password confirm must match.';
              }
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button $size='large'>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            'Create new account'
          )}
        </Button>
      </FormRowVertical>

      <AuthLink to='/login' page='Log in'>
        Already have an account?
      </AuthLink>
    </Form>
  );
}

export default SignupForm;
