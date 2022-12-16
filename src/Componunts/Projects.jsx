import React from 'react'
import {Box,Flex,Center,Square,Text,Heading,Image, Spacer,Button,Divider,Link} from '@chakra-ui/react';
import { SiChakraui,SiReact,SiHtml5,SiCss3,SiJavascript,SiGithub } from "react-icons/si";
import Mean from '../images/meanbuy_img.jpg';
import Mean_m from '../images/meanbuy_img_mobi.png';
import unbounce from '../images/Unbounce_d.png';
import unbounce_m from '../images/unbounce_mobi.png';
import head from '../images/h_d.png';
import head2 from '../images/h_m.png';

const DataPro = [
{img1:Mean,img2:Mean_m,
  info:'MeanBuy was originally founded as a cross border B2C e-commerce platform.It primarily focuses on bringing transparency to customers ordering directly from wholesalers or manufacturers. By offering flexible pricing around future delivery dates.'
  ,name:'meanbuy.com Clone',
  git:'https://github.com/VikeshHinge/vikeshhinge-meanbuy.com_clone/tree/main/meanbuy',
  live:'https://ubiquitous-choux-641ad1.netlify.app/',
  icon1:[ <SiHtml5 size='45px'/>,<SiCss3 size='45px'/>,<SiJavascript size='45px'/>,<SiReact size='45px'/>,<SiChakraui size='45px'/>],
  icon2:[  <SiHtml5 size='25px'/>,<SiCss3 size='25px'/>,<SiJavascript size='25px'/>,<SiReact size='25px'/>,<SiChakraui size='25px'/>],
},
{img1:unbounce,img2:unbounce_m,
  info:"Unbounce is a Canadian software company. The company produces landing pages for websites.It is an IA-based website that helps new small businesses to create and host their landing pages"
  ,name:'unbounce.com Clone',
  git:'https://github.com/VikeshHinge/lavish-sink-2448/tree/main/unbounce',
  live:'https://vikunbounce.netlify.app/',
  icon1:[ <SiHtml5 size='45px'/>,<SiCss3 size='45px'/>,<SiJavascript size='45px'/>,<SiReact size='45px'/>,<SiChakraui size='45px'/>],
  icon2:[  <SiHtml5 size='25px'/>,<SiCss3 size='25px'/>,<SiJavascript size='25px'/>,<SiReact size='25px'/>,<SiChakraui size='25px'/>]
},
{img1:head,img2:head2,
  info:"Headphone Zone is India’s first exclusive online store for headphones, earphones, and personal Audio devices featuring the world's finest headphones from brands renowned for their sound, design, and style."
  ,name:'headphonezone.in Clone',
  git:'https://github.com/avinash7488/foolish-quiet-4224',
  live:'',
  icon1:[ <SiHtml5 size='45px'/>,<SiCss3 size='45px'/>,<SiJavascript size='45px'/>],
  icon2:[  <SiHtml5 size='25px'/>,<SiCss3 size='25px'/>,<SiJavascript size='25px'/>]
},
]

const Projects = () => {

console.log(DataPro[0].img1)

  return (
   <Box w='95%' m='auto'  mt='50px' mb='50px' id='projects' pt={{base:'10px',md:'100px'}}>

    <Heading mb='30px' pl='25px' className='h3'>My Projects :</Heading>


    {DataPro.map((ele,i)=>(
               <Flex mt='100px' mb='100px' direction={{base:'column',md:'row'}} > 

                <Box position='relative' w={{base:'100%',md:'60%'}} >
                  <Box className='projectDesk'>
                  <Image w='100%' src={ele.img1} alt={ele.name}/>
                  </Box>
                  <Box className='projectMobi'>
                   <Image w='100%' src={ele.img2}/>
                  </Box>
               
                  <Flex m='auto' justifyContent='center' gap='10px' p='5px' display={{base:'none',md:'flex'}}>
                    {ele.icon1.map((e,i)=> <div key={i}>{e}</div>)}
                 </Flex>
                 <Flex m='auto' justifyContent='center' gap='10px' p='5px' display={{base:'flex',md:'none'}}>
                 {ele.icon2.map((e,i)=> <div key={i}>{e}</div>)}
                 </Flex>
               </Box>
 
               <Box w={{base:'100%',md:'40%'}} p='10px'>
                  <Heading size={{base:'md',md:'lg'}}>{ele.name}</Heading>
                  <Text mt='10px' lineHeight='20px' >{ele.info} </Text>
                  <Flex justifyContent='flex-end' gap='10px' alignItems='center' mt='20px' p='10px'>
                    <Link href={ele.git} ><SiGithub size='35px'/></Link>
                    <Link href={ele.live}><Button colorScheme='teal' variant='outline'  w='100px'>Live</Button></Link>
                  </Flex>
                 </Box>
 
         </Flex>
    )
        
      )}




    {/* //  <Flex mt='100px' mb='100px' direction={{base:'column-reverse',md:'row'}}>

    // <Box w={{base:'100%',md:'40%'}} p='10px'>
    //     <Heading size={{base:'md',md:'lg'}}>unbounce.com Clone</Heading>
    //     <Text mt='10px' lineHeight='20px' >
    //     MeanBuy was originally founded as a cross border B2C e-commerce platform, . It primarily focuses 
    //     on bringing transparency to customers ordering directly from wholesalers or manufacturers. By 
    //     offering flexible pricing around future delivery dates.
    //     </Text>
    //     <Flex justifyContent='flex-start' gap='10px' alignItems='center' mt='20px' p='10px'>
    //       <SiGithub size='35px'/>
    //       <Button colorScheme='teal' variant='outline'  w='100px'>Live</Button>
    //     </Flex>
    //    </Box>

    //    <Box position='relative'  w={{base:'100%',md:'60%'}} >
    //     <Box className='projectDesk' >
    //     <Image w='100%' src='https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg'/>
    //     </Box>
    //     <Box className='projectMobi2'>
    //     <Image w='100%' src='https://i.pinimg.com/236x/7a/2a/57/7a2a579512b4e038ea2c1fe457e5f824.jpg'/>
    //     </Box>
    //     <Flex m='auto' justifyContent='center' gap='10px' p='5px' display={{base:'none',md:'flex'}}>
    //     <SiHtml5 size='45px'/><SiCss3 size='45px'/><SiJavascript size='45px'/><SiReact size='45px'/><SiChakraui size='45px'/>
    //     </Flex>
    //     <Flex m='auto' justifyContent='center' gap='10px' p='5px' display={{base:'flex',md:'none'}}>
    //     <SiHtml5 size='25px'/><SiCss3 size='25px'/><SiJavascript size='25px'/><SiReact size='25px'/><SiChakraui size='25px'/>
    //     </Flex>
    //    </Box>

    // </Flex>  */}



    
   </Box>
  )
}

export default Projects
