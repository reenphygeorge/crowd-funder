import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  VStack,
  Grid,
  Select,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";

interface campaignData {
  Name: String;
  Description: String;
  Category: String;
  requiredAmount: String;
  endDate: String;
}

const NewCampaign: NextPage = () => {
  // const [campaignObject, setcampaignObject] = useState<campaignData>({
  //   Name: "",
  //   Description: "",
  //   Category: "",
  //   requiredAmount: "",
  //   endDate: "",
  // });

  const handleForm = (e: any) => {};

  return (
    <>
      <Heading mb={["12", "16"]} size="lg" fontWeight="800" textAlign="center">
        Create New Campaign
      </Heading>
      <Flex justifyContent="center">
        <FormControl>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={["12", "14", "16"]}
            justifyContent={["start", "start", "center"]}
            mb="12"
          >
            <GridItem>
              <FormLabel>Campaign Name</FormLabel>
              <Input
                type="text"
                // value={campaignObject.Name}
                // onChange={(e: any) =>
                // setcampaignObject({ Name: e.target.value })
                // }
              />
            </GridItem>

            <GridItem>
              <FormLabel>Description</FormLabel>
              <Textarea
                // value={campaignObject.Description}
                placeholder="Write a short description about the campaign"
              />
            </GridItem>

            <GridItem>
              <FormLabel>Select category</FormLabel>
              <Select defaultValue="health">
                <option value="health">Health</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </Select>
            </GridItem>

            <GridItem>
              <FormLabel>Required Amount</FormLabel>
              <InputGroup>
                <Input
                  type="tel"
                  // value={campaignObject.requiredAmount}
                  placeholder="0.001"
                />
                <InputRightAddon bgColor="black">ETH</InputRightAddon>
              </InputGroup>
            </GridItem>

            <GridItem>
              <FormLabel>End Date</FormLabel>
              <Input type="date" />
            </GridItem>

            <GridItem>
              <FormLabel mb="4">Campaign Poster</FormLabel>
              <InputGroup>
                <input type="file" />
              </InputGroup>
            </GridItem>
          </Grid>
          <Center>
            <Grid
              mt="5"
              mb="10"
              templateColumns="repeat(2, 1fr)"
              gap={10}
              justifyContent={["start", "start", "center"]}
            >
              <GridItem>
                <Button
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  _hover={{
                    opacity: "0.8",
                  }}
                  size="lg"
                >
                  Submit
                </Button>
              </GridItem>

              <GridItem>
                <Button bgColor="#2c2c2c" _hover={{ bg: "#1E1E1E" }} size="lg">
                  Clear
                </Button>
              </GridItem>
            </Grid>
          </Center>
        </FormControl>
      </Flex>
    </>
  );
};

export default NewCampaign;
