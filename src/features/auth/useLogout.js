import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { logOut as logOutAPI } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: logOut } = useMutation({
    mutationFn: logOutAPI,

    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },

    onError: (error) => console.log(error),
  });

  return {
    isLoading,
    logOut,
  };
}
