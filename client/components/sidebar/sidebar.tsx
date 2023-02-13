import { Box, Flex, VStack } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <>
      {/* <Flex
        flexDirection="column"
        // justifyItems="between"
        w="76px"
        ml="12"
        mt="12"
        pt={5}
        alignItems="center"
        bgColor="#1c1c24"
        rounded="3xl"
      > */}
      <VStack>
        <Box pt="10px">
          <AiFillHome size="40" />
        </Box>
        <Box mt={10}>
          <AiFillHome size="40" />
        </Box>
        <Box mt={10}>
          <AiFillHome size="40" />
        </Box>
        <Box mt={10}>
          <AiFillHome size="40" />
        </Box>
      </VStack>
      {/* </Flex> */}
    </>
  );
};
