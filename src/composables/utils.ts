export const getImagePath = (src: string) => {
  const {
    public: { tmdbImagePath },
  } = useRuntimeConfig()
  return `${tmdbImagePath}${src}`
}
