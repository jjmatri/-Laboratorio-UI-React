import {Box, Image } from '@chakra-ui/react'
//import  Image  from './bicicleta'
import bicicleta from '../assets/bicicleta.png'


function Header() {
    return <div classes="imagen">
        <h2 >Todo App</h2>
       
        <Box boxSize='sm'>
            <Image src={bicicleta} alt='Dan Abramov' />
            
        </Box>
    </div>

}
export default Header