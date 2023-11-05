import { useMutation } from '@tanstack/react-query';
import { logIn as loginAPI } from '../../services/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const { isLoading: isLoggingIn, mutate: login } =
    useMutation({
      mutationFn: ({ email, password }) =>
        loginAPI(email, password),

      onSuccess: (user) => {
        console.log(user);
        toast.success('Succesfully logged in'),
          navigate('/');
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { isLoggingIn, login };
}
