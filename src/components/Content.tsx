import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { PiWhatsappLogoThin, PiBrowsersThin  } from "react-icons/pi";

export function Content() {
  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' p={3} mb='2rem'>
        <GridItem as='div' h='max-content' m={'1rem'} w='full' height='23rem' colSpan={{ base: 10, md: 5 }} colStart={{ base: 2, md: 2 }} p={3} color='#233D45'>
         <Box border='1px' borderColor='red' h='full'>
            Video zap ou video browser, depende da opção selecionada ao lado
         </Box>
        </GridItem>
        <GridItem as='div' h='max-content' m='auto' ml='1rem' colSpan={{ base: 10, md: 5 }} colStart={{ base: 2}} p={3} color='#233D45'>
          <Box h='max-content' border='1px' borderColor='#919EA2' borderRadius='8'
           display='flex' flexDirection='row' p='1rem' alignItems={'center'} boxShadow='xl'>
            <PiWhatsappLogoThin size='5rem' color='#919EA2'/>
            <Text>
              <span>Chat Whatsapp</span><hr/>
              <Text fontSize='0.8rem' mt='0.5rem'>A simple form of conversation direct of your Whatsapp!</Text>
            </Text>
          </Box>
          <Box h='max-content' border='1px' borderColor='#919EA2' borderRadius='8'
           display='flex' flexDirection='row' p='1rem'  mt='1rem'  alignItems={'center'} boxShadow='xl'>
          <PiBrowsersThin size='6rem'  color='#919EA2'/>
            <Text>
              <span>Chat Web</span><hr/>
              <Text fontSize='0.8rem' mt='0.5rem'>A conversation realized in your browser with managment across your profile.</Text>
              
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}