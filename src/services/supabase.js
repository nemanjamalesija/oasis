import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rzakgratzmyihtuhgnmw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YWtncmF0em15aWh0dWhnbm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4OTUwODYsImV4cCI6MjAxMjQ3MTA4Nn0.juwhFy_TuxU82bEI7SiWeu9UeS7i2vmm18BSvMpE8Qw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
