import supabase from './supabase';

// USER SIGNUP
export async function signUp(
  email,
  password,
  fullName,
  avatar
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);

  return data;
}

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
  const { data: session } =
    await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

// LOG OUT
export async function logOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
