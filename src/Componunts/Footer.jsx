import React from 'react'
import {Box,Divider,Flex,Text,Input,Textarea,Stack,Heading,Button,Center,Image,Link} from '@chakra-ui/react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLinkedin,ImGithub } from "react-icons/im";
import { SiProtocolsdotio } from "react-icons/si";


const Footer = () => {

const clearform = () => {
   
}


  return (
      <Box borderTop='2px solid' borderBottom='50px solid' p='30px' id='contact' >
        <Flex justifyContent='center' gap='30px' p='10px' direction={{base:'column',md:'row'}}>

           
            <Box w='200px'>
             <form action="https://formspree.io/f/meqdynbo" method='POST' className='form' >
               <Input required  borderColor='aqua' name='username' placeholder='Your Name' size='sm' />
               <Input required  borderColor='aqua' name='Email' placeholder='Your Email' size='sm' />
               <Textarea
                name='message'
                borderColor='aqua'
                placeholder='Here'
                size='sm'
               />
               <Input type='submit' onClick={clearform} borderRadius='0px' borderColor='aqua' className='submit'/>
              </form> 
            </Box>

            <Stack spacing={4} >
             <Heading size={{base:'md',md:'lg'}}>Contact Me</Heading>
             <Flex gap='10px'><TfiEmail size='30px'/>  <Text as='b'>vikeshvhinge@gmail.com</Text></Flex>
             <Flex gap='10px'><FaPhoneAlt size='30px'/>  <Text as='b'>+91 9324523266</Text></Flex>
             <Flex gap='20px'><Link href='https://www.linkedin.com/in/vikesh-hinge-b02828236/'><ImLinkedin size='30px'/></Link>
             <Link href='https://github.com/VikeshHinge'><ImGithub size='30px'/> </Link> <Text as='b'></Text></Flex>
             <Flex alignItems='center' gap='10px'>Created By Vikesh Hinge | 2022 <SiProtocolsdotio/></Flex>
             </Stack>

        </Flex>
      </Box>
  )
}

export default Footer
