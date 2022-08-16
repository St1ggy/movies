import { JsonName } from 'tserialize'

import { getDetails } from './details.model'

const Details = getDetails({ originalTitleKey: 'original_title', localizedTitleKey: 'title' })

export class MovieDetails extends Details {}
