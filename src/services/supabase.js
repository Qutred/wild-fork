import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://xhlssdfcbxlnzigrrsnz.supabase.co';
//process.env.SUPABASE_KEY;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobHNzZGZjYnhsbnppZ3Jyc256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNDk3MDIsImV4cCI6MjAyNDYyNTcwMn0.e9I-ivN7Is5eYdTmWlSQcyE6ZxzjbRGaBbcE383-YuE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
