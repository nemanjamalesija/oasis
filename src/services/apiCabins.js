import supabase, { supabaseUrl } from './supabase';

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

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // https://rzakgratzmyihtuhgnmw.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${crypto.randomUUID()}--${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create/edit cabin
  let query = supabase.from('cabins');

  if (!id)
    // if not id passed, create cabin
    query = query.insert([{ ...newCabin, image: imagePath }]);

  // else, edit cabin
  if (id)
    query = query.update({ ...newCabin, image: imagePath }).eq('id', `${id}`);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  // Upload image
  const { error: storageERror } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image, {
      cacheControl: '3600',
      upsert: false,
    });

  // Delete cabin if there was an error uploading the image
  if (storageERror) {
    await supabase.from('cabins').delete().eq('id', data.id);

    console.error(error);
    throw new Error(
      'Cabin image could not be uploaded. Thus, cabin was not created'
    );
  }

  return data;
}
