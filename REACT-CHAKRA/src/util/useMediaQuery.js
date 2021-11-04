import { useMediaQuery as useChakraMediaQuery } from "@chakra-ui/media-query"

export const tabletMediaQuery = '(max-width: 768px)'
export const mobileMediaQuery = '(max-width: 400px)'

export const useMediaQuery = () => {
  const [matchesTablet] = useChakraMediaQuery(tabletMediaQuery)
  const [matchesMobile] = useChakraMediaQuery(mobileMediaQuery)

  return { matchesTablet, matchesMobile }
}