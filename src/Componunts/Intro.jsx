import React from 'react'
import {Box,Flex,Center,Square,Text,Heading,Image, Spacer,Button,Divider} from '@chakra-ui/react';
import {Link} from 'react-scroll'
import './Aboutme.css'
const Intro = () => {
  return (
   <Flex className='intro_box' id='home' mb='50px' >

     <Box className='heading' p='5px' overflow='hidden'>
      
      <Box p='15px' >
      <Flex alignItems='center' gap='10px'><Text>Hello,I Am </Text><Divider w='150px'/></Flex>
         
         <Box className='intro_img2'>
         <Image src='https://avatars.githubusercontent.com/u/103572278?v=4' alt='Vikesh Hinge' />
         </Box>
         
         <Text className='heading1'> Vikesh Vijay Hinge</Text>
         <Text className='heading2'>Aspiring Full Stack Web Developer </Text>
         <Flex gap='10px' m='auto' mt='10px' justifyContent='center' w='50%'>
          <Link href='https://drive.google.com/u/1/uc?id=1igPjIRPHjUcyG45jd4NqYE5GGROEUC_1&export=download'> <Button className='button' bg='#c7ff84' borderRadius='0px'>
           My Resume
         </Button></Link>
         
           <Link  to='projects' smooth={true} spy={true}><Button className='button' bg='#c7ff84' borderRadius='0px' > Projects</Button></Link>
      </Flex>
      </Box>
     
     </Box>
    
      <Box className='intro_img'>
      <Image  m='auto' src='https://avatars.githubusercontent.com/u/103572278?v=4' alt='Vikesh Hinge' />
      
   </Box>

   </Flex>

  )
}

export default Intro;
