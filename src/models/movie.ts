import { JsonName } from 'tserialize'

import { MovieStatus, MovieType } from '@/types'

export class Movie {
  @JsonName()
  id: number

  @JsonName()
  createdAt: string | null

  @JsonName(undefined, ...dateSerialization)
  releaseDate: string | null

  @JsonName()
  originalTitle: string

  @JsonName()
  localizedTitle: string

  @JsonName()
  description: string | null

  @JsonName()
  backdropPath: string | null

  @JsonName()
  posterPath: string | null

  @JsonName()
  status: MovieStatus

  @JsonName()
  type: MovieType

  @JsonName()
  genres: number[]

  @JsonName()
  runtime: number[]

  @JsonName('tagline', (s) => s, (s) => s.replace(/[«»]/g, ''))
  tagline: string
}
