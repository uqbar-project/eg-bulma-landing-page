import { Image } from '@chakra-ui/image'
import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import React from 'react'

export default function Introduccion() {
  return (
    <HStack spacing={8} as="section" id="about">
      <Box boxShadow="lg">
        <Image src="images/sal.jpg" alt="jane-doe" loading="lazy" objectFit="cover" />
      </Box>

      <Box
        width="60%"
        boxShadow="lg"
        paddingX={6}
        paddingY={8}
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
    </HStack>
  )
}