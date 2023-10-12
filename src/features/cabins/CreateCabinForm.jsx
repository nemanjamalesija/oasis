import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin succefully created');
      reset();

      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data) => mutate({ ...data, image: data.image[0] });
  const onError = (errors) => console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='name' error={errors?.name?.message}>
        <Input
          disabled={isCreating}
          type='text'
          id='name'
          {...register('name', { required: 'Cabin name is required' })}
        />
      </FormRow>
      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            required: 'Cabin max capacity is required',
            valueAsNumber: true,
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>
      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          disabled={isCreating}
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required: 'Cabin price is required',
            valueAsNumber: true,
            min: { value: 1, message: 'Price should be at least 1' },
          })}
        />
      </FormRow>
      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          disabled={isCreating}
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            required: 'Discount value is required',
            valueAsNumber: true,
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount should be less than the price of the cabin',
          })}
        />
      </FormRow>
      <FormRow label='Description' error={errors?.description?.message}>
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          {...register('description', {
            required: 'Cabin description  is required',
          })}
        />
      </FormRow>
      <FormRow label='Cabin photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          {...register('image', { required: 'Cabin image is required' })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isCreating} variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
