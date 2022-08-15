import { sample } from 'effector'

import { MovieDetails, SeriesDetails } from '@/models'

import { fetchMovieFx } from './effects'
import * as events from './events'
import * as stores from './stores'

sample({
  source: events.getMovieById,
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

stores.$movieDetails //
  .on(fetchMovieFx.doneData, (_, m) => {
    if (!m) return null
    return 'runtime' in m ? MovieDetails.fromServer(m) : SeriesDetails.fromServer(m)
  })
  .reset(events.clearMovie)
