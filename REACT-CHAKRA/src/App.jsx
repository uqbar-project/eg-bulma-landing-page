import React from 'react'
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { customTheme as theme } from './style/theme'
import NosotrosSection from './components/sections/NosotrosSection'
import IntroduccionSection from './components/sections/IntroduccionSection'
import TecnologiasSection from './components/sections/TecnologiasSection'
import ProyectosSection from './components/sections/ProyectosSection'
import ContectenosSection from './components/sections/ContectenosSection'
import FloatingIcons from './components/FloatingIcons'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box paddingTop={8} paddingX={48}>
        <IntroduccionSection />
        <NosotrosSection />
        <TecnologiasSection />
        <ProyectosSection />
        <ContectenosSection />
        <FloatingIcons />


        <footer class="footer">
          <div class="content has-text-centered">
            <p class="copy">&copy; Copyright 2021</p>
            <p class="copy">
              Built with &#x2661; by
              <a href="https://algo3.uqbar-project.org/" target="_blank">Algo 3 (Unsam)</a>
            </p>
          </div>
        </footer>
      </Box>
    </ChakraProvider>
  )
}

export default App
