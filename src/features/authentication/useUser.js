import { useQuery } from '@tanstack/react-query';
import { getCurrentUser as getCurrentUserApi } from '../../services/apiAuth';

const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getCurrentUserApi(),
  });

  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' };
};

export default useUser;
