import { Box, Text } from "@chakra-ui/react";

export function CardWhereUse(props: {title : String, content : String}){
    return(
        <>        
        <Box w='16rem' h='max-content' border='1px' borderColor='#919EA2' borderRadius='8' color='#233D45'  p='0.6rem' >
            <Text as='h2' fontWeight='bold' fontSize='1rem'>{props.title}</Text>
            <hr />
            <Text fontSize='0.9rem' as='p' mt='1rem'>
                {props.content}
            </Text>

            
        </Box>
        </>
    )
}