import { JsonArray, JsonName } from 'tserialize'

import { getDetails } from './details'
import { ProductionCompany } from './production-company'
import { SeriesCreator } from './series-creator'
import { SeriesSeason } from './series-season'

const Details = getDetails({ originalTitleKey: 'original_name', localizedTitleKey: 'name' })

export class SeriesDetails extends Details {
  @JsonArray(SeriesCreator, 'created_by')
  createdBy: SeriesCreator[]

  @JsonName('episode_run_time', (s) => s, (a) => a.sort())
  episodeRunTime: number[]

  @JsonName('first_air_date', ...dateSerialization)
  firstAirDate: string

  @JsonName('in_production')
  inProduction: boolean

  @JsonName()
  languages: string[]

  @JsonName()
  name: string

  @JsonName()
  networks: ProductionCompany[]

  @JsonName('number_of_episodes')
  numberOfEpisodes: number

  @JsonName('number_of_seasons')
  numberOfSeasons: number

  @JsonName('origin_country')
  originCountry: Iso3166[]

  @JsonName('original_name')
  originalName: string

  @JsonArray(SeriesSeason)
  seasons: SeriesSeason[]
}
