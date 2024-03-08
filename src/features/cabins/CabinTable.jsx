import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import useCabins from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

const CabinTable = () => {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resourceName="cabins" />;

  //FILTER
  const filterValue = searchParams.get('discount') ?? 'all';

  let filteredCabins;

  switch (filterValue) {
    case 'no-discount':
      filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
      break;
    case 'with-discount':
      filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
      break;
    default:
      filteredCabins = cabins;
  }

  //SORT
  const sortValue = searchParams.get('sortBy') ?? 'name-asc';
  const [field, direction] = sortValue.split('-');
  const sortModifier = direction === 'asc' ? 1 : -1;
  filteredCabins.sort((a, b) => (a[field] - b[field]) * sortModifier);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
