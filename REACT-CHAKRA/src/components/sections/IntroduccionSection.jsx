import { Image } from '@chakra-ui/image'
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { tabletMediaQuery } from '../../style/mediaQueries'

const Content = ({ matchesTablet }) => (
  <>
    <Box boxShadow="lg">
      <Image minHeight="200px"  width="auto" src="images/sal.jpg" alt="jane-doe" loading="lazy" objectFit="cover" />
    </Box>

    {/* TODO: Reutilizar en un component card */}
    <Box
      width={`${matchesTablet} ? '100%' : '60%'`}
      boxShadow="lg"
      paddingX={6}
      paddingY={8}
      border={`1px solid rgba(158, 158, 158, 0.1)`}
    >
    <Heading>¡Hay Equipo!</Heading>
    <Text marginTop={4}>
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi
      porta
      gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur
      ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
    </Text>
  </Box>
  </>
)

export default function IntroduccionSection() {
  const [matchesTablet] = useMediaQuery(tabletMediaQuery)

  return matchesTablet ? (
    <VStack spacing={8} as="section">
      <Content matchesTablet={matchesTablet} />
    </VStack >
  )
    : (
      <HStack spacing={8} as="section">
        <Content matchesTablet={matchesTablet} />
      </HStack>
    )

}
