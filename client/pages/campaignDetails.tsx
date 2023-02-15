import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Container,
  Highlight,
  Button,
} from "@chakra-ui/react";
import { NextPage } from "next";

const CampaignDetails: NextPage = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-around"
        mt={["16", "16", "24"]}
        mb="16"
      >
        <Container maxW="4xl">
          <Box>
            <Heading mb={1} size="lg" fontWeight="800">
              Campaign Title
            </Heading>
            <Text fontWeight="700" color="gray.300" mb={5}>
              by edluhwycrki76krit72qcwi
            </Text>
            <Text fontWeight="700">
              <Highlight
                query={["Health", "Education", "Other"]}
                styles={{ px: "2", py: "1", rounded: "20px", bg: "teal.100" }}
              >
                Health
              </Highlight>
            </Text>
            <Text mt="10" color="gray.200" fontWeight="600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel,
              sequi corrupti mollitia minus cum explicabo eos blanditiis
              similique repudiandae ipsa consequuntur ea eveniet repellat sit
              consectetur accusamus voluptate pariatur?
            </Text>
          </Box>
          <Flex
            flexDirection={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
            justifyContent="space-between"
            mt={["7", "10", "12"]}
          >
            <Flex flexDirection="column">
              <Box mt={["20", "20", "12"]}>
                <Text mb="5" color="#e7e8e8" fontWeight="700">
                  Last Date: 12/03/2023
                </Text>
                <Text mb="5" color="#e7e8e8" fontWeight="700">
                  0.001
                  <br />
                  Raised of 0.1
                </Text>
              </Box>
              <Button
                mt="3"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                _hover={{
                  opacity: "0.8",
                }}
                size="lg"
              >
                Donate
              </Button>
            </Flex>
            <Box w={["xs", "md", "xl"]}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default CampaignDetails;
