import { useMutation } from '@tanstack/react-query';
import { signUp as signUpAPI } from '../../services/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();

  const { isLoading: isLoading, mutate: signup } =
    useMutation({
      mutationFn: ({ email, password, fullName }) =>
        signUpAPI(email, password, fullName),

      onSuccess: () => {
        toast.success(
          'Account succesfully created! Feel free to log in.'
        );
        navigate('/login', { replace: true });
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { isLoading, signup };
}
