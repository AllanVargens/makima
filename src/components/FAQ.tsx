import { Box, Grid, Text } from "@chakra-ui/react";

export function FAQ() {
  return (
    <>
      <Box w='80%' color='#233D45' mx='auto' my='2rem'>
        <Text as='h2' fontSize='2.5rem' fontWeight='bold'>FAQ</Text>
        <hr />

        <details>
          <summary style={{textDecoration: 'none', display: 'flex', fontWeight: 'bold', fontSize: '1.4rem', marginTop: '1rem', marginLeft: '1rem'}} >
            <Text >Question 1 about the product</Text>
          </summary><hr />
          <Text fontSize='0.8rem' ml='1.4rem'>Response about the question 1</Text>      
        </details>

        <details>
          <summary style={{textDecoration: 'none', display: 'flex', fontWeight: 'bold', fontSize: '1.4rem', marginTop: '1rem', marginLeft: '1rem'}} >
            <Text >Question 2 about the product</Text>
          </summary><hr />
          <Text fontSize='0.8rem' ml='1.4rem'>Response about the question 2</Text>
        </details>

        <details>
          <summary style={{textDecoration: 'none', display: 'flex', fontWeight: 'bold', fontSize: '1.4rem', marginTop: '1rem', marginLeft: '1rem'}} >
            <Text >Question 3 about the product</Text>
          </summary><hr />
          <Text fontSize='0.8rem' ml='1.4rem'>Response about the question 3</Text>
        </details>

        <details>
          <summary style={{textDecoration: 'none', display: 'flex', fontWeight: 'bold', fontSize: '1.4rem', marginTop: '1rem', marginLeft: '1rem'}} >
            <Text >Question 4 about the product</Text>
          </summary><hr />
          <Text fontSize='0.8rem' ml='1.4rem'>Response about the question 4</Text>
        </details>

        <details>
          <summary style={{textDecoration: 'none', display: 'flex', fontWeight: 'bold', fontSize: '1.4rem', marginTop: '1rem', marginLeft: '1rem'}} >
            <Text >Question 5 about the product</Text>
          </summary><hr />
          <Text fontSize='0.8rem' ml='1.4rem'>Response about the question 5</Text>
        </details>
      </Box>
    </>
  )
}