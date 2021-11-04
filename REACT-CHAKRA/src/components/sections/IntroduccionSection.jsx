import { Image } from '@chakra-ui/image'
import { Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useMediaQuery } from '../../util/useMediaQuery'
import StyledCard from '../StyledCard'

const ContentCard = ({ matchesTablet }) => (
  <>
    <StyledCard boxShadow="lg">
      <Image minHeight="200px" width="auto" src="images/sal.jpg" alt="jane-doe" loading="lazy" objectFit="cover" />
    </StyledCard>

    <StyledCard
      width={matchesTablet ? '100%' : '60%'}
      paddingX={6}
      paddingY={8}
      hasBorder
    >
      <Heading>¡Hay Equipo!</Heading>
      <Text marginTop={4}>
        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi
        porta
        gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur
        ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
      </Text>
    </StyledCard>
  </>
)

export default function IntroduccionSection() {
  const { matchesTablet } = useMediaQuery()

  return matchesTablet ? (
    <VStack spacing={8} as="section">
      <ContentCard matchesTablet={matchesTablet} />
    </VStack >
  ) : (
    <HStack spacing={8} as="section">
      <ContentCard matchesTablet={matchesTablet} />
    </HStack>
  )
}