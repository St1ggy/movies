import { sample } from 'effector'
import { deserialize } from 'tserialize'

import { MovieDetails, SeriesDetails } from '@/models'

import { fetchMovieFx } from './effects'
import * as events from './events'
import * as stores from './stores'

sample({
  source: events.getDetails,
  target: fetchMovieFx,
})

stores.$isLoading //
  .on(fetchMovieFx.pending, (_, pending) => pending)

stores.$details //
  .on(fetchMovieFx.doneData, (_, m) => {
    if (!m) return null
    return isMovie(m) ? deserialize(m, MovieDetails) : deserialize(m, SeriesDetails)
  })
  .reset([events.clearMovie])
