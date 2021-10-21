import { Image } from '@chakra-ui/image'
import { Link, VStack } from '@chakra-ui/layout'
import React from 'react'

export default function FloatingIcons() {
  return (
    <VStack position="fixed" right={4} top="35%" alignItems="flex-end">
      <Link href="#" target="_blank" width="15%">
        <Image src="gifs/icons8-twitter-circled.gif" alt="Twitter" loading="lazy"/>
      </Link>

      <Link href="#" target="_blank" width="15%">
        <Image src="gifs/icons8-instagram.gif" alt="Instagram" loading="lazy"/>
      </Link>

      <Link href="#" target="_blank" width="15%">
        <Image src="gifs/icons8-linkedin-circled.gif" alt="Linkedin" loading="lazy"/>
      </Link>

      <Link href="#" target="_blank" width="15%">
        <Image src="gifs/icons8-github.gif" alt="Github" loading="lazy"/>
      </Link>
    </VStack>
  )
}
