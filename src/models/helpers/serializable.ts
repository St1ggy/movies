import { deserialize, serialize } from 'tserialize'

export function Serializable<From, To>() {
  class _Serializable {
    static fromServer(data: From) {
      return deserialize(data, this) as To
    }

    static toServer(data: typeof this) {
      return serialize(data) as unknown as From
    }
  }
  return _Serializable
}
