import { JsonName } from 'tserialize'

export class SeriesCreator {
  @JsonName()
  id: number

  @JsonName('credit_id')
  creditId: string

  @JsonName()
  name: string

  @JsonName()
  gender: number

  @JsonName('profile_path')
  profilePath: string | null
}
