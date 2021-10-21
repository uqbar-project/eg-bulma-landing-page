import React from 'react'
import {
  ChakraProvider,
  VStack
} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { customTheme as theme } from './style/theme'
import NosotrosSection from './components/sections/NosotrosSection'
import IntroduccionSection from './components/sections/IntroduccionSection'
import TecnologiasSection from './components/sections/TecnologiasSection'
import ProyectosSection from './components/sections/ProyectosSection'
import ContectenosSection from './components/sections/ContectenosSection'
import FloatingIcons from './components/FloatingIcons'
import Footer from './components/Footer'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <VStack paddingTop={8} paddingBottom={16} paddingX={48} spacing={8}>
        <IntroduccionSection />
        <NosotrosSection />
        <TecnologiasSection />
        <ProyectosSection />
        <ContectenosSection />
        <FloatingIcons />
      </VStack>
      <Footer />
    </ChakraProvider>
  )
}

export default App
