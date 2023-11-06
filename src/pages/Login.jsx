import Logo from '../ui/Logo';
import Heading from '../ui/Heading';
import LoginForm from '../features/auth/LoginForm';
import { useUser } from '../features/auth/useUser';
import { Navigate } from 'react-router-dom';
import AuthFormLayout from '../ui/AuthFormLayout';

function Login() {
  const { isAuthenticated } = useUser();

  if (isAuthenticated) return <Navigate to='/dashboard' />;

  return (
    <AuthFormLayout>
      <Logo />
      <Heading as='h4'>Log in to your account</Heading>
      <LoginForm />
    </AuthFormLayout>
  );
}

export default Login;
