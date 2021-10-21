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


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box paddingTop={8} paddingX={48}>
        <IntroduccionSection />
        <NosotrosSection />
        <TecnologiasSection />
        <ProyectosSection />

        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column">
                <div class="box">
                  <h1 class="title has-text-centered">Contactenos</h1>
                  <div class="field">
                    <label class="label">Nombre</label>
                    <div class="control has-icons-left has-icons-right">
                      <input class="input is-danger" type="text" placeholder="Ingrese su Nombre" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                      <input class="input is-danger" type="email" placeholder="Ingrese su email" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Mensaje</label>
                    <div class="control">
                      <textarea class="textarea is-danger" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                  </div>

                  <div class="field has-text-centered">
                    <div class="control">
                      <button class="button is-danger is-large is-rounded">Enviar</button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

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
