import styled from 'styled-components';
import useRecentBookings from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import useRecentStays from './useRecentStays';
import Stats from './Stats';
import useCabins from '../cabins/useCabins';
import SalesChart from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashBoardlayout = () => {
  const { isLoading: isBookingLoading, bookings } = useRecentBookings();
  const {
    isLoading: isStaysLoading,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isCabinsLoading } = useCabins();

  if (isBookingLoading || isStaysLoading || isCabinsLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today&apos;s activity</div>
      <div>Chart stay duration</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};

export default DashBoardlayout;
