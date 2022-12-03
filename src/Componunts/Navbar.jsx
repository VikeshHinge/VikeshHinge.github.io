import React from 'react'
import {Box,Flex,Text,Heading, Spacer} from '@chakra-ui/react'

import { NavLink } from "react-router-dom";


function Navbar() {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";


  return (
  <Box   className='nav' >
    <Flex justifyContent='center' >

    <Box m='auto' >
    <Heading className='logo' >V_Hinge</Heading>
    </Box>

    <Box className='Navbox'>
    <Flex gap='50px' >
     <Text className='text1' as='b'>Home</Text>
     <Text className='text1' as='b'>About</Text>
     <Text className='text1' as='b'>Skills</Text>
     <Text className='text1' as='b'>Projects</Text>
     <Text className='text1' as='b'>Contact</Text>
     </Flex>
        
    </Box>

    </Flex>
   
  </Box>
  )
}

export default Navbar
