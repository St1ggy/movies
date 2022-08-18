import { JsonName } from 'tserialize'

export class ProductionCompany {
  @JsonName()
  id: number

  @JsonName('logo_path')
  logoPath: string | null

  @JsonName()
  name: string

  @JsonName('origin_country')
  originCountry: Iso3166
}
