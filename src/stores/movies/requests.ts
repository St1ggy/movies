export const fetchMovies = async () => {
  const { movies } = await $fetch('/api/movies')
  return movies
}

export const updateMovie = async ({ id, ...updatedFields }: TUpdatedMovie) => {
  const {
    movies: [movie],
  } = await $fetch('/api/movies/update', { method: 'PUT', body: { id, ...updatedFields } })
  return movie
}
