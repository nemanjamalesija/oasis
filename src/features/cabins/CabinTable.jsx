import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import useCabins from './useCabins';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Table from '../../ui/Table';

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((c) => c.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((c) => c.discount > 0);

  return (
    <Menus>
      <Table>
        <Table.Header />

        <Table.Body
          data={filteredCabins}
          render={(cabin) => (
            <CabinRow key={cabin.id} {...cabin} />
          )}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
