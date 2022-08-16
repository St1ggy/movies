import { combine } from 'effector'

import { Movie } from '@/models'

import { $movies, $query } from './stores'

export const $moviesFiltered = combine($movies, $query, (movies, query) =>
  movies.filter(({ originalTitle, localizedTitle }) => {
    const matchQuery = query.length === 0 || new RegExp(query, 'i').exec(`${originalTitle}${localizedTitle}`)
    return [matchQuery].every((_) => _)
  }),
)
export const $moviesMap = $movies.map((movies) =>
  movies.reduce<Record<Movie['id'], Movie>>((acc, movie) => {
    acc[movie.id] = movie
    return acc
  }, {}),
)
