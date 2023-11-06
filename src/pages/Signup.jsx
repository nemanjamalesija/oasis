import SignupForm from '../features/authentication/SignupForm';
import AuthFormLayout from '../ui/AuthFormLayout';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';

const Signup = () => {
  return (
    <AuthFormLayout>
      <Logo />
      <Heading as='h4'>Create your account</Heading>
      <SignupForm />;
    </AuthFormLayout>
  );
};

export default Signup;
