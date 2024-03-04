import { nanoid } from 'nanoid';
import supabase, { supabaseUrl } from './supabase';

export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};

export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${nanoid()}-${newCabin.image.name}`.replace('/', '');
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created/edited');
  }

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, newCabin.image, {
        cacheControl: '3600',
        upsert: false,
      });

    if (storageError) {
      await supabase.from('cabins').delete().eq('id', data.id);
      console.error(storageError);
      throw new Error(
        'Cabin image could not be uploaded and the cabin was not created',
      );
    }
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  return data;
};
