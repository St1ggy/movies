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

sample({
  source: fetchMovieFx.doneData,
  fn: () => false,
  target: stores.$isLoading,
})

stores.$isLoading //
  .on(fetchMovieFx.pending, () => true)
  .reset(fetchMovieFx.doneData)

stores.$details //
  .on(fetchMovieFx.doneData, (_, m) => {
    if (!m) return null
    return deserialize(m, isMovie(m) ? MovieDetails : SeriesDetails)
  })
  .reset(events.clearMovie)
