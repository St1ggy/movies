import { JsonName } from 'tserialize'

export class ProductionCountry {
  @JsonName('iso_3166_1')
  iso3166: Iso3166

  @JsonName()
  name: string
}
