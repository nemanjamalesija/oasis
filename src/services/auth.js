import supabase from './supabase';

// USER LOGIN
export async function logIn(email, password) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  console.log(email, password);
  console.log(data);

  if (error) throw new Error('Could not log in.');

  return data;
}
