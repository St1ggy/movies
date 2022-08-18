import { JsonArray, JsonName } from 'tserialize'

import { ProductionStatus } from '@/types'

import { Genre } from './genre'
import { ProductionCompany } from './production-company'
import { ProductionCountry } from './production-country'
import { SpokenLanguage } from './spoken-language'

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

    @JsonName('tagline', (s) => s, (s) => s.replace(/[«»]/g, ''))
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
        title: originalTitle || localizedTitle || '-',
        subtitle: '',
      }
    }
  }

  return Details
}
