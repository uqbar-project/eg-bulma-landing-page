import { Avatar } from '@chakra-ui/avatar'
import { Box, Heading, HStack, Link, Spacer } from '@chakra-ui/layout'
import React from 'react'

export default function Navbar() {

  const menuItems = ['Nosotros', 'Habilidades', 'Proyectos', 'Contactos']

  return (
    <HStack
      as="nav"
      aria-label="main navigation"
      color="white"
      backgroundColor="primary"
      paddingY={4}
      paddingX={8}
    >
      <Avatar size="lg" src="images/pelota_50.png" backgroundColor="white" />
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
        {menuItems.map((item) => <Link href={`#${item}`}>{item}</Link>)}
      </HStack>
    </HStack>
  )
}
