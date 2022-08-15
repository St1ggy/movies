import * as Icon from '@heroicons/vue/outline'
import { StylisticIssues } from 'eslint/rules/stylistic-issues'

import { MovieStatus, MovieType, TmdbStatus } from './enums'

type MovieSeriesResponseCommon = {
  adult: boolean
  backdrop_path: string | null
  genres: Genre[]
  id: number
  original_language: Iso639_1
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
  status: TmdbStatus
  vote_average: number
  vote_count: number
  overview: string | null
  tagline: string | null
  homepage: string | null
}

declare global {
  type Optional<O, K extends keyof O> = Omit<O, K> & { [key in K]+?: O[key] }

  type RequiredOnly<O, K extends keyof O> = Partial<Omit<O, K>> & { [key in K]-?: O[key] }

  type StoreSlug = 'hobby-movies'

  type IconName = keyof typeof Icon

  type TMovie = {
    id: number
    createdAt: string | null
    releaseDate: string | null
    originalTitle: string
    localizedTitle: string
    description: string | null
    backdropUrl: string | null
    posterUrl: string | null
    status: MovieStatus
    type: MovieType
    genres: number[]
    runtime: number[]
    tagline: string
  }

  type TUpdatedMovie = RequiredOnly<TMovie, 'id'>

  type Iso639_1 = string
  type Iso3166_1 = string

  type Genre = { id: number; name: string }

  type ProductionCompany = {
    id: number
    logo_path: string | null
    name: string
    origin_country: Iso3166_1
  }

  type ProductionCountry = {
    iso_3166_1: Iso3166_1
    name: string
  }

  type SpokenLanguage = {
    iso_639_1: Iso639_1
    name: string
  }

  type TvCreator = {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string | null
  }

  type TvSeason = {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: StylisticIssues
    poster_path: string
    season_number: number
  }

  type Collection = {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
  }

  type MovieResponse = MovieSeriesResponseCommon & {
    belongs_to_collection: Collection
    budget: number
    imdb_id: string | null
    original_title: string
    release_date: string
    revenue: number
    runtime: number | null
    title: string
    video: boolean
  }

  type SeriesResponse = MovieSeriesResponseCommon & {
    created_by: TvCreator[]
    episode_run_time: number[]
    first_air_date: string
    in_production: boolean
    languages: string[]
    name: string
    networks: ProductionCompany[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: Iso3166_1[]
    original_name: string
    seasons: TvSeason[]
  }

  type GenresRecord = Record<Genre['id'], Genre['name']>
}
