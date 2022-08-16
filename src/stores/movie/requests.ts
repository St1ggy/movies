import { Movie } from '@/models'

export const fetchMovie = async ({
  type,
  id,
}: Pick<Movie, 'id' | 'type'>): Promise<MovieResponse | ShowResponse | null> =>
  await $fetch(`/api/movie?id=${id}&type=${type}`)
