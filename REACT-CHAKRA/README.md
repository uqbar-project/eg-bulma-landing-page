# Frameworks CSS in JS con Chakra UI

Este proyecto todavía esta en progreso pero en la [documentación](https://chakra-ui.com/docs/getting-started) de Chakra pueden encontrar una guía de como agregarlo al proyecto, existen dos alternativas que son las siguientes:

## Opcion 1 (recomendada)
La opcion mas simple es hacer el setup inicial del proyecto con la plantilla que nos provee Chakra.
Al ejecutar el comando ```npx create-react-app``` podemos utilizar una plantilla y asi iniciar un proyecto con una configuracion inicial diferente a la por defecto, para iniciar un proyecto con la configuracion de Chakra listo para usar podemos usar el siguiente comando:

### Usando npm
```bash
npx create-react-app runtime-react --template @chakra-ui
```

### Usando yarn
```bash
yarn create react-app runtime-react --template @chakra-ui
```

## Opcion 2
Si ya tenemos el proyecto iniciado con ```create-react-app``` sin la plantilla podemos agregar Chakra al proyecto con el siguiente comando:

### Usando npm
```bash
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

### Usando yarn
```bash
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

Luego debemos encerrar todo componente que este dentro de nuestro elemento root (```App.jsx```) en un wrapper llamado ```ChakraProvider```.

```javascript
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (
    <ChakraProvider>
      // Contenido
    </ChakraProvider>
  )
}
```