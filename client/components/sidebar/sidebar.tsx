import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome, FaPlus } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <>
      <Box bgColor="gray.800" p={5} rounded="2xl" m={5} h="90vh">
        <Box>
          <FaHome size="20" />
        </Box>
        <Box mt={10}>
          <FaPlus size="20" />
        </Box>
        <Box mt={10} >
          <BsPersonCircle size="20" />
        </Box>
      </Box>
    </>
  );
};
