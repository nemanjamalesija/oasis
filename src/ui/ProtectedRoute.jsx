import { Navigate } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) return <Navigate to='/login' />;

  return children;
};

export default ProtectedRoute;
