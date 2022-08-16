import * as Icon from '@heroicons/vue/outline'
import * as MDBRequestTypes from 'moviedb-promise/dist/request-types'

import { Movie } from '@/models'

import { MovieStatus, MovieType } from './enums'

declare global {
  type Optional<O, K extends keyof O> = Omit<O, K> & { [key in K]+?: O[key] }

  type RequiredOnly<O, K extends keyof O> = Partial<Omit<O, K>> & { [key in K]-?: O[key] }

  type IconName = keyof typeof Icon

  interface TMovie {
    id: number
    createdAt: string | null
    releaseDate: string | null
    originalTitle: string
    localizedTitle: string
    description: string | null
    backdropPath: string | null
    posterPath: string | null
    status: MovieStatus
    type: MovieType
    genres: number[]
    runtime: number[]
    tagline: string
  }

  type TUpdatedMovie = RequiredOnly<Movie, 'id'>

  type MovieResponse = MDBRequestTypes.MovieResponse
  type ShowResponse = MDBRequestTypes.ShowResponse

  type GenresRecord = Record<Genre['id'], Genre['name']>
}
