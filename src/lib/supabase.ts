import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jdrdzeoodzwevzxutgsk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkcmR6ZW9vZHp3ZXZ6eHV0Z3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MDQyOTUsImV4cCI6MjA1MjA4MDI5NX0.7S-KZ07uTu3XWWSHSB2Ip5IQ6DLZROnQeLmSz5qVD3k';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Anon Key');
}

export const supabase = createClient(supabaseUrl, supabaseKey);