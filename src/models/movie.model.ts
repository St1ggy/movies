import { JsonName } from 'tserialize'

import { Serializable } from './helpers'

export class Movie extends Serializable<TMovie, Movie>() {
  @JsonName()
  id: TMovie['id']

  @JsonName()
  createdAt: TMovie['createdAt']

  @JsonName()
  releaseDate: TMovie['releaseDate']

  @JsonName()
  originalTitle: TMovie['originalTitle']

  @JsonName()
  localizedTitle: TMovie['localizedTitle']

  @JsonName()
  description: TMovie['description']

  @JsonName()
  backdropUrl: TMovie['backdropUrl']

  @JsonName()
  posterUrl: TMovie['posterUrl']

  @JsonName()
  status: TMovie['status']

  @JsonName()
  type: TMovie['type']

  @JsonName()
  genres: TMovie['genres']

  @JsonName()
  runtime: TMovie['runtime']

  @JsonName()
  tagline: TMovie['tagline']
}
