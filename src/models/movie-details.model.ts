import { JsonName, deserialize, serialize } from 'tserialize'

export class MovieDetails {
  @JsonName('original_title')
  originalTitle = ''

  static fromServer(data: MovieResponse): MovieDetails {
    return deserialize<MovieDetails>(data, MovieDetails)
  }

  static toServer(data: MovieDetails) {
    return serialize(data) as MovieResponse
  }
}
