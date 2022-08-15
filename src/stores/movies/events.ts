import { createEvent } from 'effector'

export const getMovies = createEvent()
export const updateMovie = createEvent<TUpdatedMovie>()
export const clearMovies = createEvent()
export const clearQuery = createEvent()
