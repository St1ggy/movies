export const useParamsType = () => {
  const type = useRoute().params.type as string
  return typeByParam[type]
}
