import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { ReactComponent as HTML5Icon } from '../../assets/icons/icons8-html-5.svg'
import { ReactComponent as CSS3Icon } from '../../assets/icons/icons8-css3.svg'
import { ReactComponent as JavascriptIcon } from '../../assets/icons/icons8-javascript.svg'
import { ReactComponent as BootstrapIcon } from '../../assets/icons/icons8-bootstrap.svg'
import { ReactComponent as ReactIcon } from '../../assets/icons/icons8-react-native.svg'
import { ReactComponent as GitIcon } from '../../assets/icons/icons8-git.svg'

/* TODO: Usar un map para la lista de tecnologias */
export default function TecnologiasSection() {
  return (
    <Box as="section" id="Habilidades">
      <Center>
        <Heading>Tecnologías</Heading>
      </Center>

      <Center marginTop={8}>
        <SimpleGrid as="section" columns={3} spacingX={64} spacingY={10} paddingX={32}>
          {/* TODO: Implementar icon card component */}
          <Box width="80%" borderRadius="5%" boxShadow="lg">
            <HTML5Icon alt="HTML5 Icon" />
          </Box>

          <Box width="80%" borderRadius="5%" boxShadow="lg">
            <JavascriptIcon alt="Javascript icon" />
          </Box>

          <Box width="80%" borderRadius="5%" boxShadow="lg">
            <CSS3Icon alt="CSS3 icon" />
          </Box>

          <Box width="80%" borderRadius="5%" boxShadow="lg">
            <BootstrapIcon alt="Bootstrap icon" />
          </Box>

          <Box width="80%" borderRadius="5%" boxShadow="lg">
            <ReactIcon alt="React icon" />
          </Box>

          <Box width="80%" borderRadius="5%" boxShadow="lg">
            <GitIcon alt="Git icon" />
          </Box>
        </SimpleGrid >
      </Center >
    </Box>
  )
}
