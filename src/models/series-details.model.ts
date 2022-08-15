import { JsonName, deserialize, serialize } from 'tserialize'

export class SeriesDetails {
  @JsonName('original_name')
  originalTitle = ''

  static fromServer(data: SeriesResponse): SeriesDetails {
    return deserialize<SeriesDetails>(data, SeriesDetails)
  }

  static toServer(data: SeriesDetails) {
    return serialize(data) as SeriesResponse
  }
}
