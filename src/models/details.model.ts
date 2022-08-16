import { JsonArray, JsonName } from 'tserialize'

import { ProductionStatus } from '@/types'

class Genre {
  @JsonName()
  id: number

  @JsonName('name', (s) => s, (s) => s.toLowerCase())
  name: string
}

/** Locale: en, ru, fr */
type Iso639 = string

/** Country: US, RU, FR */
type Iso3166 = string

class ProductionCompany {
  @JsonName()
  id: number

  @JsonName('logo_path')
  logoPath: string | null

  @JsonName()
  name: string

  @JsonName('origin_country')
  originCountry: Iso3166
}

class ProductionCountry {
  @JsonName('iso_3166_1')
  iso3166: Iso3166

  @JsonName()
  name: string
}

class SpokenLanguage {
  @JsonName('iso_639_1')
  iso639: Iso639

  @JsonName()
  name: string
}

export const getDetails = ({ originalTitleKey, localizedTitleKey }) => {
  abstract class Details {
    @JsonName(originalTitleKey)
    originalTitle: string

    @JsonName(localizedTitleKey)
    localizedTitle: string

    @JsonName()
    adult: boolean

    @JsonName('backdrop_path')
    backdropPath: string | null

    @JsonArray(Genre)
    genres: Genre[]

    @JsonName()
    id: number

    @JsonName('original_language')
    originalLanguage: string

    @JsonName()
    popularity: number

    @JsonName('poster_path')
    posterPath: string | null

    @JsonArray(ProductionCompany, 'production_companies')
    productionCompanies: ProductionCompany[]

    @JsonArray(ProductionCountry, 'production_countries')
    productionCountries: ProductionCountry[]

    @JsonArray(SpokenLanguage, 'spoken_languages')
    spokenLanguages: SpokenLanguage[]

    @JsonName()
    status: ProductionStatus

    @JsonName('vote_average')
    voteAverage: number

    @JsonName('vote_count')
    voteCount: number

    @JsonName()
    overview: string | number

    @JsonName()
    tagline: string | number

    @JsonName()
    homepage: string | null

    get titles() {
      const { originalTitle, localizedTitle } = this
      if (originalTitle.length > 0 && localizedTitle.length > 0 && originalTitle !== localizedTitle)
        return {
          title: localizedTitle,
          subtitle: originalTitle,
        }

      return {
        title: originalTitle || localizedTitle || '',
      }
    }
  }

  return Details
}
