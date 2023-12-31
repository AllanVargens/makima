import { Header } from "@/components/Header";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Makima</title>
      </Head>
      <Box as="main">
        <Header />
      </Box>
    </>
  )
}
