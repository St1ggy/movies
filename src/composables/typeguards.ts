export const isMovie = (m: ShowResponse | MovieResponse): m is MovieResponse => 'runtime' in m
export const isSeries = (m: ShowResponse | MovieResponse): m is ShowResponse => !('runtime' in m)
