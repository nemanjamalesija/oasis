import styled from 'styled-components';
import { useEffect, useState } from 'react';
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
import { formatCurrency } from '../../utils/helpers';
import { useCheckIn } from './useCheckin';
import useSettings from '../settings/useSettings';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [includeBreakfast, setIncludeBreakfast] =
    useState(false);
  const { booking, isLoading } = useBooking();

  const { settings, isLoading: isLoadingSettings } =
    useSettings();

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);

  const { checkin, isCheckingIn } = useCheckIn();

  const moveBack = useMoveBack();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const breakfastPrice =
    settings.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!confirmPaid) return;
    includeBreakfast
      ? checkin({
          bookingId,
          updateBookingInfo: {
            hasBreakfast: true,
            extrasPrice: breakfastPrice,
            totalPrice: breakfastPrice + totalPrice,
          },
        })
      : checkin({ bookingId, updateBookingInfo: {} });
  }

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

      {!hasBreakfast && (
        <Box>
          <CheckBox
            checked={includeBreakfast}
            onChange={() => setIncludeBreakfast(true)}
          >
            Want to add breakfast for&nbsp;
            {formatCurrency(breakfastPrice)} ?
          </CheckBox>
        </Box>
      )}

      <Box>
        <CheckBox
          id='confirmPayed'
          checked={confirmPaid}
          onChange={() => setConfirmPaid((prev) => !prev)}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that <strong>{guests.fullName}</strong>
          has paid the total amount of
          <strong>{formatCurrency(totalPrice)}</strong>
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button
          onClick={handleCheckin}
          disabled={!confirmPaid || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button $variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
