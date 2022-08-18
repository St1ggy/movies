import { JsonName } from 'tserialize'

export class SeriesSeason {
  @JsonName('air_date', ...dateSerialization)
  airDate: string

  @JsonName('episode_count')
  episodeCount: number

  @JsonName()
  id: number

  @JsonName()
  name: string

  @JsonName()
  overview: string

  @JsonName('poster_path')
  posterPath: string

  @JsonName('season_number')
  seasonNumber: number
}
