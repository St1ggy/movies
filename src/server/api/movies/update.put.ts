import { supabase } from '../supabase'

export default defineEventHandler(async (event) => {
  const { id, ...updatedFields } = await useBody<TUpdatedMovie>(event)
  try {
    const { data } = await supabase.from<TMovie>('movies').update(updatedFields).eq('id', id)
    return { movies: data ?? [] }
  } catch (error) {
    return { movies: [] }
  }
})
