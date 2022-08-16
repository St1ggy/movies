import { sample } from 'effector'

import { Movie } from '@/models'

import { fetchMoviesFx, updateMovieFx } from './effects'
import * as events from './events'
import * as stores from './stores'

sample({
  source: events.getMovies,
  target: fetchMoviesFx,
})

sample({
  source: events.updateMovie,
  target: updateMovieFx,
})

sample({
  source: fetchMoviesFx.doneData,
  fn: () => false,
  target: stores.$isLoading,
})

stores.$isLoading //
  .on(fetchMoviesFx.pending, () => true)
  .reset(fetchMoviesFx.doneData)

stores.$query //
  .reset(events.clearQuery)

stores.$movies //
  .on(fetchMoviesFx.doneData, (_, ms) => ms.map((m) => Movie.fromServer(m)))
  .on(updateMovieFx.doneData, (prev, updated) => prev.map((g) => (g.id === updated.id ? Movie.fromServer(updated) : g)))
  .reset(events.clearMovies)
