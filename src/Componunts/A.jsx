
import React from 'react'
import {Text,Box,Divider,Flex,Link} from '@chakra-ui/react'
import { IoFastFoodOutline } from "react-icons/io5";
import { ImSleepy } from "react-icons/im";
import { SiFreecodecamp } from "react-icons/si";
import { TiArrowRepeatOutline } from "react-icons/ti";

const A = () => {
  return (
    <Box mt={{base:'50px'}} >
    <Text fontWeight='bold'>while( Life ) {`{`}</Text>
       <Flex  ml='15px' ><IoFastFoodOutline size='55px'/> <Text className='heading3'><Link className='heading5'>E</Link>AT</Text></Flex>
       <Flex  ml='15px'> <Text className='heading3'>SLEEP</Text><ImSleepy size='55px'/></Flex>
        <Flex  ml='15px'><SiFreecodecamp size='55px'/><Text className='heading4'>CODE</Text></Flex>
        <Flex  ml='15px'><Text className='heading3'>REPEAT</Text><TiArrowRepeatOutline size='55px' color='green'/></Flex>
        <Text fontWeight='bold'>{`}`}</Text>
    </Box>
  )
}

export default A;
