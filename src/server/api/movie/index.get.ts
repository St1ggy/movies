import { tmdbApi } from '@/server/api/tmdb'
import { MovieType } from '@/types'

export default defineEventHandler(async (event) => {
  try {
    const { id, type } = (await useQuery(event)) as unknown as Pick<TMovie, 'id' | 'type'>
    switch (type) {
      case MovieType.SERIES:
        return (await tmdbApi.getTvShowSection().getTvShow(id).getDetailsAsync()) as Promise<SeriesResponse>
      case MovieType.MOVIE:
        return (await tmdbApi.getMovieSection().getMovie(id).getDetailsAsync()) as Promise<MovieResponse>
    }
  } catch (e) {
    return null
  }
})
