import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

const serialize = (str: string) => str

const deserialize = (str: string) => dayjs(str).format('D MMMM YYYY г.')

export const dateSerialization = [serialize, deserialize]
