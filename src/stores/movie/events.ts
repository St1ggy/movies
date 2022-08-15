import { createEvent } from 'effector'

export const getMovieById = createEvent<Pick<TMovie, 'id' | 'type'>>()
export const clearMovie = createEvent()
