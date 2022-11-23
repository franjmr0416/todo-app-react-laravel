import { ChakraProvider } from '@chakra-ui/react'
import Main from './pages/Main'
import '@fontsource/poppins'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  )
}

export default App
