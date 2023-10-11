import isSameMinute from 'date-fns/isSameMinute';
import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be loaded');
  }

  return data;
}

export async function deleteCabin(cabinID) {
  const { error } = await supabase.from('cabins').delete().eq('id', cabinID);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }
}

export async function createCabin(values) {
  const { data, error } = await supabase
    .from('cabins')
    .insert({ ...values })
    .select();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }

  return data;
}
