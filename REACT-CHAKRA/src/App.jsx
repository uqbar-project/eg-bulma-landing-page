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
import ContactenosSection from './components/sections/ContactenosSection'
import FloatingIcons from './components/FloatingIcons'
import Footer from './components/Footer'
import { useMediaQuery } from './util/useMediaQuery'

function App() {
  const { matchesTablet } = useMediaQuery()

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <VStack paddingTop={8} paddingBottom={16} paddingX={matchesTablet ? 16 : 32} spacing={16}>
        <IntroduccionSection />
        <NosotrosSection />
        <TecnologiasSection />
        <ProyectosSection />
        <ContactenosSection />
        <FloatingIcons />
      </VStack>
      <Footer />
    </ChakraProvider>
  )
}

export default App
