import toast from 'react-hot-toast';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteBooking as deleteBookingAPI } from '../../services/apiBookings';

export default function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } =
    useMutation({
      mutationFn: deleteBookingAPI,
      onSuccess: () => {
        toast.success('Booking succesfully deleted.');

        queryClient.invalidateQueries({
          queryKey: ['bookings'],
        });
      },

      onError: (err) => toast.error(err.message),
    });

  return { isDeleting, deleteBooking };
}
