import { useMutation } from '@tanstack/react-query';
import { login as LoginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (err) => toast.error(err.message),
  });
  return { login, isLoading };
};

export default useLogin;
