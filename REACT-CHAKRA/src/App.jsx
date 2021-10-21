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

       

        <div class="socials">
          <a href="#" target="_blank"><img src="assets/icons/icons8-twitter-circled.gif" alt="Twitter" loading="lazy"
            class="socicon" /></a>
          <a href="#" target="_blank"><img src="assets/icons/icons8-instagram.gif" alt="Instagram" loading="lazy"
            class="socicon" /></a>
          <a href="#" target="_blank"><img src="assets/icons/icons8-linkedin-circled.gif" alt="Linkedin" loading="lazy"
            class="socicon" /></a>
          <a href="#" target="_blank"><img src="assets/icons/icons8-github.gif" alt="Github" class="socicon" /></a>
        </div>


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
