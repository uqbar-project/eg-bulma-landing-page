import { Avatar } from '@chakra-ui/avatar'
import { Box, Heading, HStack, Link, Spacer } from '@chakra-ui/layout'
import React from 'react'

export default function Navbar() {
  return (
    <HStack
      as="nav"
      aria-label="main navigation"
      color="white"
      backgroundColor="primary"
      paddingY={4}
      paddingX={8}
    >
      <Avatar size="lg" src="images/pelota_50.png" />
      <Heading >RUN APP</Heading>

      <Spacer />

      {/*  TODO: Mobile */}
      <button class="navbar-burger is-danger button" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <HStack 
      spacing={4}>
          <Link href="#">Nosotros</Link>
          <Link href="#">Habilidades</Link>
          <Link href="#">Proyectos</Link>
          <Link href="#">Contacto</Link>
      </HStack>
    </HStack>
  )
}
