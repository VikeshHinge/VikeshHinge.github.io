import React from 'react'
import {Box,Flex,Center,Square,Text,Heading,Image, Spacer,Button,Divider} from '@chakra-ui/react';
import './Aboutme.css'
const Aboutme = () => {
  return (
   <Box >

   <Flex className='aboutme' flexDirection={{base:'column',md:'row'}}>
     <Box className='heading'  >
     <Flex><Text as='b'>Hello</Text><Divider /></Flex>
     <Heading as='h1' size='4xl' w='70%'>I Am Vikesh Hinge</Heading>
     <Text w='70%' mt='15px' mb='15px'>Aspiring Full Stack Web Developer at Masai School, Life Long Learner.</Text>
     <Button colorScheme='teal' variant='solid'>
       My Resume
     </Button>
     </Box>
      <Box bg='yellow'>
      <Image w='80%' m='auto' borderRadius='20px' src='https://avatars.githubusercontent.com/u/103572278?v=4' alt='Vikesh Hinge' />
      </Box>
   </Flex>
  
   </Box>
  )
}

export default Aboutme
