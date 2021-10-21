import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'
import Navbar from './components/Navbar'
import { extendTheme } from "@chakra-ui/react"
import Introduccion from './components/Introduccion'

const theme = extendTheme({
  colors: {
    primary: "#f14668",
    white: "#ffffff",
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box paddingTop={8} paddingX={48}>
      <Introduccion />

      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="box has-text-centered">
                <h1 class="title">Nosotros</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                  nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
                  autem deleniti cupiditate molestias quis unde quae totam porro dicta
                  iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
                  nostrum dolor minus, libero delectus praesentium perferendis
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  consequuntur labore? Ea totam voluptas amet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="section has-text-centered">
        <div class="container">
          <h1 class="title">Tecnologías</h1>
          <div class="columns">
            <div class="column is-flex is-justify-content-center">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img src="assets/icons/icons8-html-5.svg" alt="" loading="lazy"
                      class="icon icon-card" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column  is-flex is-justify-content-center">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img src="assets/icons/icons8-css3.svg" alt="" loading="lazy" class="icon icon-card" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-flex is-justify-content-center">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img src="assets/icons/icons8-javascript.svg" alt="" loading="lazy"
                      class="icon icon-card" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-flex is-justify-content-center">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img src="assets/icons/icons8-bootstrap.svg" alt="" loading="lazy" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column  is-flex is-justify-content-center">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img src="assets/icons/icons8-react-native.svg" alt="" loading="lazy" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-flex is-justify-content-center">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img src="assets/icons/icons8-git.svg" alt="" loading="lazy" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="section has-text-centered">
        <div class="container">
          <h1 class="title">Proyectos Implementados</h1>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content">
                  <p class="has-text-weight-bold"> Adidas Sports </p>
                  <div class="content">
                    <img src="images/adidas.JPG" alt="adidas-sports" loading="lazy"
                      class="project-pic" />
                    <p class="project-details">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                      ratione vel inventore labore commodi modi quos culpa aut saepe!
                      Alias!
                    </p>
                    <button class="button is-danger is-large is-inverted">¡Click!</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <div class="card-content">
                  <p class="has-text-weight-bold"> Nike Experience </p>
                  <div class="content">
                    <img src="images/nike.JPG" alt="nike-expeience" loading="lazy"
                      class="project-pic" />
                    <p class="project-details">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                      ratione vel inventore labore commodi modi quos culpa aut saepe!
                      Alias!
                    </p>
                    <button class="button is-danger is-large is-inverted">¡Click!</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <div class="card-content">
                  <p class="has-text-weight-bold"> Puma Runners </p>
                  <div class="content">
                    <img src="images/puma.JPG" alt="puma-runners" loading="lazy"
                      class="project-pic" />
                    <p class="project-details">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                      ratione vel inventore labore commodi modi quos culpa aut saepe!
                      Alias!
                    </p>
                    <button class="button is-danger is-large is-inverted">¡Click!</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
