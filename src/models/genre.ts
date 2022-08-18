import ColorHash from 'color-hash'
import { JsonName } from 'tserialize'

const colorHash = new ColorHash()

export class Genre {
  @JsonName()
  id: number

  @JsonName('name', (s) => s, (s) => s.toLowerCase())
  name: string

  get color() {
    return colorHash.hex(this.name)
  }
}
