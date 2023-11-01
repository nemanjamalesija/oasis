import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import useDeleteCabin from './useDeleteCabin';
import {
  HiTrash,
  HiSquare2Stack,
  HiPencil,
} from 'react-icons/hi2';
import useCreateCabin from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({
  id: cabinID,
  image,
  maxCapacity,
  name,
  regularPrice,
  description,
  discount,
}) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin } = useCreateCabin();

  function handleDuplicateCabin() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  const deleteCabinHandler = () => {
    deleteCabin(cabinID);
  };

  return (
    <>
      <TableRow role='row'>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&ndash;</span>
        )}
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinID} />

              <Menus.List id={cabinID}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicateCabin}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens='edit-cabin-form'>
                  <Menus.Button icon={<HiPencil />}>
                    Edit
                  </Menus.Button>
                </Modal.Open>

                <Modal.Open opens='confirm-delete-cabin-modal'>
                  <Menus.Button icon={<HiTrash />}>
                    Delete
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name='edit-cabin-form'>
                <CreateCabinForm
                  cabinToEdit={{
                    id: cabinID,
                    image,
                    maxCapacity,
                    name,
                    regularPrice,
                    description,
                    discount,
                  }}
                />
              </Modal.Window>

              <Modal.Window name='confirm-delete-cabin-modal'>
                <ConfirmDelete
                  resourceName='cabin'
                  onConfirm={deleteCabinHandler}
                  disabled={isDeleting}
                ></ConfirmDelete>
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </TableRow>
    </>
  );
};

export default CabinRow;
