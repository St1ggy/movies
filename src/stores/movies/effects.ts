import { createEffect } from 'effector'

import { fetchMovies, updateMovie } from './requests'

export const fetchMoviesFx = createEffect(fetchMovies)
export const updateMovieFx = createEffect(updateMovie)
