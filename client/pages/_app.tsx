import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider>
        <Container maxW="8xl" mt="12">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
