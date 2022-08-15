import { createEffect } from 'effector'

import { fetchMovie } from './requests'

export const fetchMovieFx = createEffect(fetchMovie)
