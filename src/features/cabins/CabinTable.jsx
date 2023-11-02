import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import useCabins from './useCabins';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Table from '../../ui/Table';
import Empty from '../../ui/Empty';

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource='cabins' />;

  const filterValue = searchParams.get('discount') || 'all';

  // FILTER
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((c) => c.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((c) => c.discount > 0);

  // SORT
  let sortBy =
    searchParams.get('sortBy') || 'startDate-asc';

  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => (
            <CabinRow key={cabin.id} {...cabin} />
          )}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
