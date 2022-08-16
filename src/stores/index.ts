import { sample } from 'effector'

import * as events from './events'
import * as genres from './genres'
import * as movie from './movie'
import * as movies from './movies'

sample({
  source: events.init,
  target: [genres.events.getGenres, movies.events.getMovies],
})

export const store = {
  movies,
  movie,
  genres,

  events,
}
