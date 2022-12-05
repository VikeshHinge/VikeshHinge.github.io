import React from 'react'
import {Box,Text,Heading,Image,Flex,Divider,Center} from '@chakra-ui/react'
import A from './A';


const Aboutme = () => {
  return (
    <Flex w='80%' m='auto' mt='50px' gap='10px' direction={{base:'column',md:'row'}} >
        <Box w='70%' >
        <Heading>About Me: </Heading>
        <br />
        <Text className='aboutme_text'>
          Hello, I am Vikesh Hinge from Navi Mumbai, Maharashtra. I have done BE graduation in Civil-Engineering 
          from Pune University in the year 2019, after that, I worked at India's top infrastructure development 
          company, J. Kumar Infraprojects ltd for one year, while working in the construction field I got to know
          that the world is starting to shift towers technology and becoming more and more digital and that's 
          how I decided to shift my career in IT Industry.
          Initially, I explored all branches of the IT sector to choose the best job for me, and all those options I
          found web development is a very promising career for me and I also realize I have the creative and 
          critical thinking required for a web developer’s job and that's how I started my journey towards
          becoming a Full Stack Web developer.
        </Text>
        </Box>

           <Box  m='auto' >
            <A/>
           </Box>

    </Flex>
  )
}

export default Aboutme
