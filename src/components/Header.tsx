import {
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  useBoolean
} from '@chakra-ui/react'
import { ButtonSuccess } from './assets/ButtonSuccess'
import { PiWhatsappLogoThin } from 'react-icons/pi'
import { CiLinkedin } from "react-icons/ci";
import { IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5';

export function Header() {
  // const [hover, setHover] =  useBoolean()
  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' p={3}>

        {/* <GridItem>
        <Link as='a' href='tel:+5573999999999' onMouseEnter={setHover.on} onMouseLeave={setHover.off}>
          {hover ? <PiWhatsappLogoThin size='1.5rem' color='#919EA2'/> : <IoLogoWhatsapp size='1.5rem' color='#919EA2'/>}
        </Link>
        <Link as='a' href='#'><CiLinkedin size='1.5rem' color='#919EA2'/></Link>
        <Link as='a' href='mailto:exemplo@gmail.com'><IoMailOutline size='1.5rem' color='#919EA2'/></Link>
        </GridItem> */}

        <GridItem as='div' h='max-content' m={'1rem'} colSpan={{ base: 10, md: 5 }} colStart={{base:2, md: 2}} p={3} color='#233D45'> 
          <Text as='h1' fontWeight='bold' fontSize='5xl' lineHeight={1} mb='1.5rem'>
            Do you need to know something but don't have time to research it?
          </Text>
          <Text as='p'>
            Start a simple conversation and clarify all your doubts. Faster, performative, intuitive and in your hand.
          </Text> 
          <HStack w='full' justify='end' mt='1rem'>    
            <ButtonSuccess path='/Login' text='Try it Now'/>
          </HStack>  
        </GridItem>

        <GridItem  h='20rem' border='1px' borderColor='red' m={'1rem'} colSpan={5} display={{ base: 'none', md: 'grid' }}>
          <Text align='center' >Image</Text>
        </GridItem>
      </Grid>
    </>
  )
}