import React from 'react'
import {Box,Flex,Center,Square,Text,Heading,Image, Spacer,Button,Divider} from '@chakra-ui/react';
import './Aboutme.css'
const Intro = () => {
  return (
   <Box className='container'>

   <Flex className='intro_box' flexDirection={{base:'column',md:'row'}}>
     <Box className='heading'  >
     <Flex alignItems='center' gap='10px'><Text>Hello,I Am </Text><Divider w='150px'/></Flex>
     <Text className='heading1'> Vikesh Vijay Hinge</Text>
     <Text className='heading2'>Aspiring Full Stack Web Developer </Text>
     <Button className='button' bg='#c7ff84' borderRadius='0px'>
       My Resume
     </Button>
     </Box>
    
      <Box className='intro_img'>
      <Image  m='auto' src='https://avatars.githubusercontent.com/u/103572278?v=4' alt='Vikesh Hinge' />
      </Box>
   </Flex>
  
   </Box>
  )
}

export default Intro;
