import React,{useState} from 'react'
import {Box,Flex,Text,Heading, Spacer,VStack} from '@chakra-ui/react'
import {Link} from 'react-scroll'
import { NavLink } from "react-router-dom";
import { SiProtocolsdotio } from "react-icons/si";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoIosContact,IoMdHome,IoMdHand } from "react-icons/io";
import { MdLocalFireDepartment,MdOutlineLightbulb } from "react-icons/md";

function Navbar() {

const [option,setOption] = useState(false)

   let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";



  return (
    <Box   className='nav' >

    <Flex w={{base:'80%'}} m='auto' alignItems='center'   >
    <Box pr='20px'>
    <Heading className='logo' > <Flex alignItems='center'>V< SiProtocolsdotio/>H</Flex> </Heading>
    </Box>

   
     < Spacer/>
  
   
  
    <Flex gap='50px' className='Navbox' fontWeight='bold'>
     <Link to='home' activeClass='active' smooth={true} spy={true} className='text1' as='b'>Home</Link>
     <Link to='about' smooth={true} spy={true} className='text1' as='b'>About</Link>
     <Link to='skills' smooth={true} spy={true} className='text1' as='b'>Skills</Link>
     <Link to='projects' smooth={true} spy={true} className='text1' as='b'>Projects</Link>
     <Link to='contact' smooth={true} spy={true} className='text1' as='b'>Contact</Link>
     <IoEllipsisVerticalOutline size='22px' className='displayNone' onClick={()=>setOption(!option)}/>
     </Flex>
   
    </Flex>

       <VStack w='100px' className='optionV' display={option===true?'block':'none'}>
        <Link  to='home' activeClass='active' smooth={true} spy={true} display={option===true?'block':'none'} as='b'><Flex alignItems='center' gap='5px' p='5px'><IoMdHand/>Home</Flex></Link>
        <Link  to='about' smooth={true} spy={true} display={option===true?'block':'none'} as='b'><Flex alignItems='center' gap='5px' p='5px'><SiProtocolsdotio/> About</Flex></Link>
        <Link  to='skills' smooth={true} spy={true}  display={option===true?'block':'none'} as='b'><Flex alignItems='center' gap='5px' p='5px'><MdLocalFireDepartment/> Skills</Flex></Link>
        <Link to='projects' smooth={true} spy={true} display={option===true?'block':'none'} as='b'><Flex alignItems='center' gap='5px' p='5px'><MdOutlineLightbulb/> Projects</Flex></Link>
        <Link to='contact' smooth={true} spy={true} display={option===true?'block':'none'} as='b'><Flex alignItems='center' gap='5px' p='5px'><IoIosContact/> Contact</Flex></Link>
       </VStack> 

  </Box>
  )
}

export default Navbar
