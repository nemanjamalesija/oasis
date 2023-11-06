import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/auth';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === 'authenticated',
  };
}
