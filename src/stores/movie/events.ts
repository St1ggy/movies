import { createEvent } from 'effector'

import { Movie } from '@/models'

export const getMovieById = createEvent<Pick<Movie, 'id' | 'type'>>()
export const clearMovie = createEvent()
