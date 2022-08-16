import { tmdbApi } from '@/server/api/tmdb'

export default defineEventHandler(async () => {
  try {
    const { genres: movieGenres } = await tmdbApi.genreMovieList({ language: tmdbApi.locale })
    const { genres: showGenres } = await tmdbApi.genreTvList({ language: tmdbApi.locale })
    const added: number[] = []

    return {
      genres: [...movieGenres, ...showGenres].reduce<Genre[]>((acc, genre) => {
        if (!added.includes(genre.id)) {
          genre.name = genre.name.toLowerCase()
          added.push(genre.id)
          acc.push(genre)
        }
        return acc
      }, []),
    }
  } catch (error) {
    return { genres: [] }
  }
})
