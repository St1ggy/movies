import { Movie } from '@/models'
import { tmdbApi } from '@/server/api/tmdb'
import { MovieType } from '@/types'

export default defineEventHandler(async (event) => {
  try {
    const { id, type } = (await useQuery(event)) as unknown as Pick<Movie, 'id' | 'type'>
    switch (type) {
      case MovieType.SERIES: {
        return await tmdbApi.tvInfo({ id, language: tmdbApi.locale })
      }
      case MovieType.MOVIE: {
        return await tmdbApi.movieInfo({ id, language: tmdbApi.locale })
      }
    }
  } catch (e) {
    return null
  }
})
