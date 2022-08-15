import { CompatibilityEvent } from 'h3'

export const useRouteParams = <T>(event: CompatibilityEvent) => event.context.params as T
