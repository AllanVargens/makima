import { Box, Button, Flex, FormControl, FormLabel, HStack, Heading, IconButton, Image, Input, Stack } from "@chakra-ui/react";
import { color } from "framer-motion";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function PageLogin() {
  return (
    <HStack w='full' h='100vh'>
      <Flex w='full' h='full' backgroundColor='#1CBB9B' align='center' justify='center' direction='column' gap={2} display={{ base: 'none', md: 'flex' }}>
        <Image src="/logo-semFundo.png" maxW='20rem' maxH='24rem' />
        <Link href='/'>
          <Button gap={2} w='max-content' alignItems='center' border='1px' borderColor='#1F7368' bg='none' color='#0e453f' _hover={{color: 'white', bg: '#0e453f'}}>
            Home page
            <IoArrowBack />
          </Button>
        </Link>
      </Flex>
      <Flex w='full' h='full' alignItems='center' justifyContent='center'>
        <Stack w='full' maxW='md' spacing={4} p={6}>
          <Heading fontSize='2xl' color='black'>Sign in to your account</Heading>
          <FormControl id="user">
            <FormLabel>Username</FormLabel>
            <Input placeholder="Username" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="**********" />
          </FormControl>
          <Stack
            spacing={4}
            direction='row'
            align='start'
            justify='space-between'
          >
            <Link href='#'>Forgot Password?</Link>
          </Stack>

          <Button color='white' bg='#1F7368' _hover={{bg: '#0e453f'}}>
            Sign in
          </Button>
        </Stack>
      </Flex>
    </HStack>
  )
}