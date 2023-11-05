import supabase from './supabase';

// USER LOGIN
export async function logIn(email, password) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) throw new Error(error.message);

  return data;
}

// GET USER
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Could not get the user.');

  return user;
}
