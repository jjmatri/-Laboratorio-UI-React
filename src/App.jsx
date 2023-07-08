import { ChakraProvider } from '@chakra-ui/react'
import Header from "./componentes/Header"
function App() {

  return (
    <>
      <div>
      <ChakraProvider>
      <Header/>
    </ChakraProvider>

       
      </div>
         </>
  )
}

export default App
