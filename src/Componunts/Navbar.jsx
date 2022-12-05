import React from 'react'
import {Box,Flex,Text,Heading, Spacer,Link} from '@chakra-ui/react'

import { NavLink } from "react-router-dom";
import { SiProtocolsdotio } from "react-icons/si";

function Navbar() {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";


  return (
  <Box   className='nav' >
    <Flex justifyContent='center' >

    <Box m='auto' >
    <Heading className='logo' > <Flex alignItems='center'>V/H</Flex> </Heading>
    </Box>

    <Box className='Navbox'>
    <Flex gap='50px' >
     <Link className='text1' as='b'>Home</Link>
     <Link className='text1' as='b'>About</Link>
     <Link className='text1' as='b'>Skills</Link>
     <Link className='text1' as='b'>Projects</Link>
     <Link className='text1' as='b'>Contact</Link>
     </Flex>
        
    </Box>

    </Flex>
   
  </Box>
  )
}

export default Navbar
