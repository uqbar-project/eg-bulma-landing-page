import { Box, Center, Heading, VStack } from '@chakra-ui/layout'
import { InfoOutlineIcon, EmailIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'
import StyledCard from '../StyledCard'
import CustomInput from '../CustomInput'

export default function ContactenosSection() {
  return (
    <Box as="section" width="100%" id="Contactos">
      <StyledCard padding={4} hasBorder>
        <Center paddingY={6}>
          <Heading>Contactenos</Heading>
        </Center>

        <VStack alignItems="flex-start" spacing={4}>
            <CustomInput Icon={InfoOutlineIcon} placeholder="Ingrese su Nombre" label="Name" />
            <CustomInput Icon={EmailIcon} placeholder="Ingrese su email" label="Email" />
            <CustomInput placeholder="Ingrese su mensaje" label="Mensaje" type="textarea" />

          <Button alignSelf="center" size="lg" colorScheme="pink" variant="solid">Enviar</Button>
        </VStack>
      </StyledCard>
    </Box>
  )
}
