import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hyarykdqulediwfrigwv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5YXJ5a2RxdWxlZGl3ZnJpZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzODQ5NDAsImV4cCI6MjA3Mzk2MDk0MH0.A2AQ14a1JKPlS4FsTdkUWvyIzjY6_otW-icMPy5Vw5c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
