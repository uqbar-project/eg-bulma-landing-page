import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/layout'
import { InfoOutlineIcon, EmailIcon } from '@chakra-ui/icons'
import React from 'react'
import { Textarea } from '@chakra-ui/textarea'
import { Button } from '@chakra-ui/button'

/* TODO: Exportar a un componente para hacer un map */
export default function ContectenosSection() {
  return (
    <Box as="section">
      <Box boxShadow="lg" padding={4} border={`1px solid rgba(158, 158, 158, 0.1)`}>
        <Center paddingY={6}>
          <Heading>Contactenos</Heading>
        </Center>

        <VStack alignItems="flex-start" spacing={4}>
          <Box width="100%">
            <Text fontWeight="bold">Nombre</Text>
            <InputGroup marginTop={2}>
              <InputLeftElement
                pointerEvents="none"
                children={<InfoOutlineIcon color="gray.300" />}
              />

              <Input
                placeholder="Ingrese su Nombre"
                focusBorderColor="pink.300"
              />
            </InputGroup>
          </Box>

          <Box width="100%">
            <Text fontWeight="bold">Email</Text>
            <InputGroup marginTop={2}>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />

              <Input
                placeholder="Ingrese su email"
                focusBorderColor="pink.300"
              />
            </InputGroup>
          </Box>

          <Box width="100%">
            <Text fontWeight="bold">Mensaje</Text>
            <Textarea
              marginTop={2}
              placeholder="Ingrese su mensaje"
              focusBorderColor="pink.300"
            />
          </Box>

          <Button alignSelf="center" size="lg" colorScheme="pink" variant="solid">Enviar</Button>
        </VStack>
      </Box>
    </Box>
  )
}
