import { JsonName } from 'tserialize'

export class SpokenLanguage {
  @JsonName('iso_639_1')
  iso639: Iso639

  @JsonName()
  name: string
}
