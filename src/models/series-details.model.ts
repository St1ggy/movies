import { JsonName } from 'tserialize'

import { getDetails } from './details.model'

const Details = getDetails({ originalTitleKey: 'original_name', localizedTitleKey: 'name' })

export class SeriesDetails extends Details {}
