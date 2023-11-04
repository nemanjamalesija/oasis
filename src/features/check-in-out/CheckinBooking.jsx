import styled from 'styled-components';
import { useState } from 'react';
import BookingDataBox from '../../features/bookings/BookingDataBox';

import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';
import CheckBox from '../../ui/CheckBox';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from '../bookings/useBooking';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState();
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {}

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>
          Check in booking #{bookingId}
        </Heading>
        <ButtonText onClick={moveBack}>
          &larr; Back
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <CheckBox>
          I confirm that <strong>{guests.fullName}</strong>
          has paid the total amount
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
