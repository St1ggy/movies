import { createStore } from 'effector'

import { Movie } from '@/models'

export const $isLoading = createStore(false)
export const $query = createStore('')
export const $movies = createStore<Movie[]>([])
