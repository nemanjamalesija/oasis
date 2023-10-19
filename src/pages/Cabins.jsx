import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import Button from '../ui/Button';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Modal from '../ui/Modal';

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter and sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Modal>
          <Modal.Open opens='add-cabin-form'>
            <Button>Add new cabin</Button>
          </Modal.Open>
          <Modal.Window name='add-cabin-form'>
            <CreateCabinForm />
          </Modal.Window>
        </Modal>
      </Row>
      ;
    </>
  );
}

export default Cabins;
