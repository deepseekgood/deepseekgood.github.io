import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qxtwkcfdqobjtmlmvpsa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dHdrY2ZkcW9ianRtbG12cHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MTExNzEsImV4cCI6MjA5MzI4NzE3MX0.XzEC1wod25OHTLD7A1u5rJnLivC5ho3Rbwz-gqR-1WY'

export const supabase = createClient(supabaseUrl, supabaseKey)
