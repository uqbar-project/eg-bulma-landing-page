import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'
import { tabletMediaQuery } from '../../style/mediaQueries'

const ProyectoCard = ({ title, content, img }) => (
  <Box padding={8} boxShadow="lg" border={`1px solid rgba(158, 158, 158, 0.1)`}>
    <Center>
      <Heading size="sm">{title}</Heading>
    </Center>

    <Image marginTop={2} src={img.src} alt={img.atl} loading="lazy" />
    <Text class="project-details">

      {content}
    </Text>
    <Center>
      <Button variant="ghost">¡Click!</Button>
    </Center>
  </Box>
)

export default function ProyectosSection() {
  const [matchesTablet] = useMediaQuery(tabletMediaQuery)

  const proyectos = [
    {
      title: "Adidas Sports",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas\nratione vel inventore labore commodi modi quos culpa aut saepe!\nAlias!",
      img: {
        src: "images/adidas.JPG",
        alt: "Adidas sports"
      }
    },
    {
      title: "Nike Experience",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas\nratione vel inventore labore commodi modi quos culpa aut saepe!\nAlias!",
      img: {
        src: "images/nike.JPG",
        alt: "Nike experience"
      }
    },
    {
      title: "Puma Runners",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas\nratione vel inventore labore commodi modi quos culpa aut saepe!\nAlias!",
      img: {
        src: "images/puma.JPG",
        alt: "Puma runners"
      }

    },
  ]

  return (
    <Box as="section" id="Proyectos">
      <Center>
        <Heading>Proyectos Implementados</Heading>
      </Center>

      <Flex direction={matchesTablet ? 'column' : 'row'} marginTop={4} gridGap={8}>
        {proyectos.map((proyecto) => <ProyectoCard
          title={proyecto.title}
          img={proyecto.img}
          content={proyecto.content}
        />)}
      </Flex>
    </Box>
  )
}
