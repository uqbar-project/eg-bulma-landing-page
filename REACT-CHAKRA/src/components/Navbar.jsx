import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Heading, HStack, Link, Spacer } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { useMediaQuery } from '../util/useMediaQuery'

export default function Navbar() {
  const { matchesTablet } = useMediaQuery()

  const menuItems = ['Nosotros', 'Habilidades', 'Proyectos', 'Contactos']

  const scrollTo = (location) => {
    const menuElement = document.getElementById(location)
    const extraOffset = 32 //px

    window.scrollTo({
      top: menuElement.getBoundingClientRect().top + window.pageYOffset - extraOffset,
      behavior: 'smooth'
    })
  }

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

      {
        matchesTablet ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList backgroundColor="primary">
              {menuItems.map((item) => <MenuItem onClick={() => scrollTo(item)} href={`#${item}`}>{item}</MenuItem>)}
            </MenuList>
          </Menu>
        ) : (
          <HStack spacing={4}>
            {menuItems.map((item) => <Link href={`#${item}`}>{item}</Link>)}
          </HStack>
        )

      }
    </HStack >
  )
}
