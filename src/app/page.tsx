import { Content } from "@/components/Content";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { WhereUse } from "@/components/WhereUse";
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
        <Content />
        <WhereUse />
        <FAQ/>
      </Box>
    </>
  )
}
