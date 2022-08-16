import { supabase } from '../supabase'

// const {
//   public: { tmdbImagePath },
// } = useRuntimeConfig()
//
// const updateAll = (movies: TMovie[]) =>
//   Promise.all([
//     ...movies.map(async (_m) => {
//       const m = (await $fetch(`/api/movie?id=${_m.id}&type=${_m.type}`)) as MovieResponse | SeriesResponse | null
//       if (m) {
//         const isMovie = 'runtime' in m
//         const body: TUpdatedMovie = {
//           id: _m.id,
//           posterPath: m.poster_path,
//           backdropPath: m.backdrop_path,
//           // runtime: isMovie ? [m.runtime ?? 0] : m.episode_run_time.sort(),
//           // tagline: m.tagline?.replace(/[«»]/g, '') ?? '',
//         }
//         await $fetch('/api/movies/update', { method: 'PUT', body })
//       }
//     }),
//   ])
//
// const addGenres = (movies: Movie[]) =>
//   Promise.all(
//     movies.map(({ id, genres }) =>
//       Promise.all(
//         genres.map(async (g) => {
//           const { data } = await supabase.from('movies_genres').insert([{ movie_id: id, genre_id: g }])
//           console.log({ data })
//         }),
//       ),
//     ),
//   )
export default defineEventHandler(async () => {
  try {
    const { data: movies } = await supabase
      .from<TMovie>('movies')
      .select('*')
      .order('originalTitle', { ascending: true })

    // console.log({ movies })
    // if (movies) await updateAll(movies)
    // if (movies) await addGenres(movies)

    return { movies: movies ?? [] }
  } catch (error) {
    return { movies: [] }
  }
})
