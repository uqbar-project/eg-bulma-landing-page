import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Center, Heading, HStack, Text } from '@chakra-ui/layout'
import React from 'react'

export default function ProyectosSection() {
  return (
    <Box as="section">
      <Center>
        <Heading>Proyectos Implementados</Heading>
      </Center>

      {/* TODO: extraer en un component card y hacer un map*/}
      <HStack marginTop={4} spacing={8}>
        <Box padding={8} boxShadow="lg" border={`1px solid rgba(158, 158, 158, 0.1)`}>
          <Center>
            <Heading size="sm">Adidas Sports</Heading>
          </Center>

          <Image marginTop={2} src="images/adidas.JPG" alt="Adidas sports" loading="lazy" />

          <Text class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </Text>
          <Center>
            <Button variant="ghost">¡Click!</Button>
          </Center>
        </Box>

        <Box padding={8} boxShadow="lg" border={`1px solid rgba(158, 158, 158, 0.1)`}>
          <Center>
            <Heading size="sm">Nike Experience</Heading>
          </Center>

          <Image marginTop={2} src="images/nike.JPG" alt="Nike experience" loading="lazy" />

          <Text class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </Text>
          <Center>
            <Button variant="ghost">¡Click!</Button>
          </Center>
        </Box>

        <Box padding={8} boxShadow="lg" border={`1px solid rgba(158, 158, 158, 0.1)`}>
          <Center>
            <Heading size="sm">Puma Runners</Heading>
          </Center>

          <Image marginTop={2} src="images/puma.JPG" alt="Puma runners" loading="lazy" />

          <Text class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </Text>
          <Center>
            <Button variant="ghost">¡Click!</Button>
          </Center>
        </Box>
      </HStack>
    </Box >
  )
}
