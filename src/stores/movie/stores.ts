import { createStore } from 'effector'

import { MovieDetails, SeriesDetails } from '@/models'

export const $isLoading = createStore(false)
export const $details = createStore<MovieDetails | SeriesDetails | null>(null)
