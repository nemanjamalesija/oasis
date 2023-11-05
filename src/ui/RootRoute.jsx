import { Outlet } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import Spinner from './Spinner';

const RootRoute = () => {
  const { isLoading } = useUser();

  if (isLoading) return <Spinner />;

  return <Outlet />;
};

export default RootRoute;
