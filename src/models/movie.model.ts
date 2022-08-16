import { JsonName } from 'tserialize'

export class Movie {
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
  backdropPath: TMovie['backdropPath']

  @JsonName()
  posterPath: TMovie['posterPath']

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
