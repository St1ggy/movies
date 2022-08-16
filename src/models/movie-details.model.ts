import { MovieResponse } from 'moviedb-promise/dist/request-types'
import { JsonName } from 'tserialize'

import { Serializable } from './helpers'

export class MovieDetails extends Serializable<MovieResponse, MovieDetails>() {
  @JsonName('original_title')
  originalTitle: MovieResponse['original_title']

  @JsonName()
  title: MovieResponse['title']

  @JsonName('original_language')
  originalLanguage: MovieResponse['original_language']
}
