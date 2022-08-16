import { Movie } from '@/models'

export const useParamsId = () => useRoute().params.id as unknown as Movie['id']
