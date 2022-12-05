import React from 'react'
import {Box,Image,SimpleGrid,Heading,Text} from '@chakra-ui/react'



const Skills = () => {
  return (
   <Box w='60%' m='auto'  mt='100px' p='3px'  mb='30px'overflow='hidden' className='box_grid' >

   <SimpleGrid  columns={{base:'3',md:'5'}} spacing='40px' p='30px'  textAlign='center' >

      <Box textAlign='center'  >
        <Image
          className="skill_img"
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          alt="html"
        />
         <Text className='skilltext' >HTML 5</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          alt="css"
        />
        <Text className='skilltext'>CSS 3</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
          alt="js"
        />
        <Text className='skilltext'>JavaScript</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png"
          alt="npm"
        />
        <Text className='skilltext'>npm.json</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
          alt="React.js"
        />
        <Text className='skilltext'>React.js</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
          alt="chakraUI"
        />
        <Text className='skilltext'>Chakra UI</Text>
      </Box>
      <Box>
        <Image 
          className="skill_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQZutuVAXi7boyDVdqMC_4xGIHBVaIUT7X8_bCZa6AYItzKGimXQg7rUXoEx-hLCnsaw&usqp=CAU"
          alt="Redux"
        />
        <Text className='skilltext'>Redux</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://media.graphassets.com/VKHHNvEETYqZRkqgjybc"
          alt="Next.js"
        />
        <Text className='skilltext'>Next.js</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.png"
          alt="mongoDB"
        />
        <Text className='skilltext'>MongoDB</Text>
      </Box>
      <Box>
        <Image
          className="skill_img"
          src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
          alt="Node.js"
        />
        <Text className='skilltext'>Node.Js</Text>
      </Box>

 </SimpleGrid>

   </Box>
  )
}

export default Skills
