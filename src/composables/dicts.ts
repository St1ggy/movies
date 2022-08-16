import { MovieType } from '@/types'

export const typeByParam: Record<string, MovieType> = {
  movie: MovieType.MOVIE,
  show: MovieType.SERIES,
}

export const paramByType: Record<MovieType, string> = {
  [MovieType.MOVIE]: 'movie',
  [MovieType.SERIES]: 'show',
}
