// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TmdbClient } from 'tmdb-js-wrapper/src/tmdb-js/tmdb-js'

const {
  public: { tmdbApiKey },
} = useRuntimeConfig()

export const tmdbApi = new TmdbClient(tmdbApiKey, 'ru-RU')
