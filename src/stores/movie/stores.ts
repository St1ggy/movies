import { createStore } from 'effector'

import { MovieDetails, SeriesDetails } from '@/models'

export const $isLoading = createStore(false)
export const $movieDetails = createStore<MovieDetails | SeriesDetails | null>(null)
