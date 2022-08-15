import { createStore } from 'effector'

export const $isLoading = createStore(false)
export const $query = createStore('')
export const $movies = createStore<TMovie[]>([])
