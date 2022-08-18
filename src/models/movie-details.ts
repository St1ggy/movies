import { JsonName, JsonStruct } from 'tserialize'

import { getDetails } from './details'

const Details = getDetails({ originalTitleKey: 'original_title', localizedTitleKey: 'title' })

class Collection {
  @JsonName()
  id: number

  @JsonName()
  name: string

  @JsonName('poster_path')
  posterPath: string | null

  @JsonName('backdrop_path')
  backdropPath: string | null
}

export class MovieDetails extends Details {
  @JsonStruct(Collection, 'belongs_to_collection')
  belongsToCollection: Collection

  @JsonName()
  budget: number

  @JsonName('release_date', ...dateSerialization)
  releaseDate: string

  @JsonName()
  revenue: number

  @JsonName()
  runtime: number | null

  @JsonName()
  video: boolean
}
