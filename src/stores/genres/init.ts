import { sample } from 'effector'

import { fetchGenresFx } from './effects'
import * as events from './events'
import * as stores from './stores'

sample({
  source: events.getGenres,
  target: fetchGenresFx,
})

stores.$genres //
  .on(fetchGenresFx.doneData, (_, gs) =>
    gs.reduce<GenresRecord>((acc, g) => {
      acc[g.id] = g.name
      return acc
    }, {}),
  )
