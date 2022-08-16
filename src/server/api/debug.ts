import { Movie } from '@/models'

import { supabase } from './supabase'

// const {
//   public: { tmdbImagePath },
// } = useRuntimeConfig()
//
// const updateAll = (movies: Movie[]) =>
//   Promise.all([
//     ...movies.map(async (_m, index) => {
//       const m = (await $fetch(`/api/movie?id=${_m.id}&type=${_m.type}`)) as
//         | MovieResponse
//         | SeriesResponse
//         | null
//       if (m) {
//         const isMovie = 'runtime' in m
//         const updatedFields = {
//           description: m.overview,
//           posterUrl: tmdbImagePath + m.poster_path,
//           backdropUrl: tmdbImagePath + m.backdrop_path,
//           localizedTitle: isMovie ? m.title : m.name,
//           originalTitle: isMovie ? m.original_title : m.original_name,
//         }
//         await $fetch('/api/movies/update', { method: 'PUT', body: { id: _m.id, ...updatedFields } })
//       }
//     }),
//   ])
//
export default defineEventHandler(async () => {
  try {
    const { data: movies } = await supabase
      .from<Movie>('movies')
      .select('*')
      .order('originalTitle', { ascending: true })

    // if (movies) await updateAll(movies)

    return { movies: movies ?? [] }
  } catch (error) {
    return { movies: [] }
  }
})
//
// export default defineEventHandler(async () => {
//   const { genres: movieGenres } = await tmdbApi.getGenreSection().getMovieGenresAsync()
//   const { genres: tvGenres } = await tmdbApi.getGenreSection().getTvShowGenresAsync()
//   const movieIds = movieGenres.map(({ id }) => id)
//   const tvIds = movieGenres.map(({ id }) => id)
//   const genres = [
//     // ...movieGenres.filter(({ id }) => tvIds.includes(id)),
//     ...tvGenres.filter(({ id }) => movieIds.includes(id)),
//   ]
//   // const genres = await Promise.all(
//   //   [...movieGenres, ...tvGenres].map(async (genre) => {
//   //     const { data, error } = await supabase.from('genres').insert([genre])
//   //     return { data, error }
//   //   }),
//   // )
//   return genres
//   // const { data: genres } = await supabase.from('genres').select('*')
//   // return genres
// })
