import { supabase } from '../supabase'

export default defineEventHandler(async () => {
  try {
    const { data: genres } = await supabase.from<Genre>('genres').select('*')
    console.log({ genres })
    return { genres: genres ?? [] }
  } catch (error) {
    return { genres: [] }
  }
})
