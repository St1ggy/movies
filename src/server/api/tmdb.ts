import { MovieDb } from 'moviedb-promise'

const {
  public: { tmdbApiKey, tmdbLanguage = 'ru' },
} = useRuntimeConfig()

class TmdbApi extends MovieDb {
  constructor(apiKey: string, public locale: string) {
    super(apiKey)
  }
}

export const tmdbApi = new TmdbApi(tmdbApiKey, tmdbLanguage)
