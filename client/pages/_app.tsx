import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider, Container, HStack } from "@chakra-ui/react";
import Head from "next/head";
import { Sidebar } from "../components/sidebar";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CrowdFunder - A web3 based crowd funding website</title>
        <meta
          name="description"
          content="CrowdFunder - An open source web3 based crowd funding website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <ChakraProvider>
          <div className="container-main">
            <Sidebar />
          <Container maxW="8xl" mt={10} m-auto>
            <Component {...pageProps} />
          </Container>
          </div>
        </ChakraProvider>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
