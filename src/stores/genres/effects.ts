import { createEffect } from 'effector'

import { fetchGenres } from './requests'

export const fetchGenresFx = createEffect(fetchGenres)
