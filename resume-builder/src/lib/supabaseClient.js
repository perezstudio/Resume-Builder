import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_ID, PUBLIC_SUPABASE_KEY } from '$env/static/public'

export const supabase = createClient('https://${PUBLIC_SUPABASE_ID}.supabase.co', 'PUBLIC_SUPABASE_KEY')