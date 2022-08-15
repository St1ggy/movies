export const fetchMovie = async ({
  type,
  id,
}: Pick<TMovie, 'id' | 'type'>): Promise<MovieResponse | SeriesResponse | null> =>
  await $fetch(`/api/movie?id=${id}&type=${type}`)
