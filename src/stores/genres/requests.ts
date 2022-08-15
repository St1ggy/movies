export const fetchGenres = async () => {
  const { genres } = await $fetch('/api/genres')
  return genres
}
