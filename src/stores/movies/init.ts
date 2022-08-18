import { sample } from 'effector'
import { deserialize } from 'tserialize'

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

stores.$isLoading //
  .on(fetchMoviesFx.pending, (_, pending) => pending)

stores.$query //
  .reset([events.clearQuery])

stores.$movies //
  .on(fetchMoviesFx.doneData, (_, ms) => ms.map((m) => deserialize(m, Movie)))
  .on(updateMovieFx.doneData, (prev, updated) =>
    prev.map((g) => (g.id === updated.id ? deserialize(updated, Movie) : g)),
  )
  .reset([events.clearMovies])
