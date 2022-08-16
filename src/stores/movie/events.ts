import { createEvent } from 'effector'

import { Movie } from '@/models'

export const getDetails = createEvent<Pick<Movie, 'id' | 'type'>>()
export const clearMovie = createEvent()
