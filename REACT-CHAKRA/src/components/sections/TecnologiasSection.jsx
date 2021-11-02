import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { ReactComponent as HTML5Icon } from '../../assets/icons/icons8-html-5.svg'
import { ReactComponent as CSS3Icon } from '../../assets/icons/icons8-css3.svg'
import { ReactComponent as JavascriptIcon } from '../../assets/icons/icons8-javascript.svg'
import { ReactComponent as BootstrapIcon } from '../../assets/icons/icons8-bootstrap.svg'
import { ReactComponent as ReactIcon } from '../../assets/icons/icons8-react-native.svg'
import { ReactComponent as GitIcon } from '../../assets/icons/icons8-git.svg'
import { useMediaQuery } from '@chakra-ui/media-query'
import { tabletMediaQuery } from '../../style/mediaQueries'
import StyledCard from '../StyledCard'


const tecnologias = [
  { Svg: HTML5Icon, alt: 'HTML5 Icon' },
  { Svg: JavascriptIcon, alt: 'Javascript Icon' },
  { Svg: CSS3Icon, alt: 'CSS3 Icon' },
  { Svg: BootstrapIcon, alt: 'Bootstrap Icon' },
  { Svg: ReactIcon, alt: 'React Icon' },
  { Svg: GitIcon, alt: 'Git Icon' },
]
export default function TecnologiasSection() {
  const [matchesTablet] = useMediaQuery(tabletMediaQuery)

  return (
    <Box as="section" id="Habilidades">
      <Center>
        <Heading>Tecnologías</Heading>
      </Center>

      <Center marginTop={8}>
        <SimpleGrid as="section" columns={3} spacingX={matchesTablet ? 16 : 64} spacingY={10} paddingX={matchesTablet ? 0 : 32}>
          {
            tecnologias.map(({ Svg, alt }) => (
              <StyledCard width="calc(50px + 40%)" borderRadius="5%">
                <Svg alt={alt} />
              </StyledCard>
            ))
          }
        </SimpleGrid >
      </Center >
    </Box>
  )
}
