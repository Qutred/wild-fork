import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../services/apiBookings';

const useTodayActivity = () => {
  const { isLoading: isLoadingActivities, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ['today-activity'],
  });
  return { isLoadingActivities, activities };
};

export default useTodayActivity;
