import { JsonName } from 'tserialize'

import { Serializable } from './helpers'

export class SeriesDetails extends Serializable<ShowResponse, SeriesDetails>() {
  @JsonName('original_name')
  originalTitle: ShowResponse['original_name']

  @JsonName()
  name: ShowResponse['name']

  @JsonName('original_language')
  originalLanguage: ShowResponse['original_language']
}
