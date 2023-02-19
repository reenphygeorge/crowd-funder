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
import { useStateContext } from "../context";
import { ethers } from 'ethers';

// interface campaignData {
//   Name: String;
//   Description: String;
//   Category: String;
//   requiredAmount: String;
//   endDate: String;
//   image: String
// }

const NewCampaign: NextPage = () => {
  // const [campaignObject, setcampaignObject] = useState<campaignData>({
  //   Name: "",
  //   Description: "",
  //   Category: "",
  //   requiredAmount: "",
  //   endDate: "",
  // });

  
  const [isLoading, setIsLoading] = useState(false);
  // @ts-ignore
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });

  // @ts-ignore
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  }

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
                value={form.title}
                // @ts-ignore
            handleChange={(e) => handleFormFieldChange('title', e)}
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
                value={form.description}
                onChange={(e) => handleFormFieldChange('description', e)}
              />
            </GridItem>

            <GridItem>
              <FormLabel>Select category</FormLabel>
              <Select defaultValue="health" value={form.target}
            onChange={(e) => handleFormFieldChange('target', e)}>
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
                  value={form.target}
                  onChange={(e) => handleFormFieldChange('target', e)}
                />
                <InputRightAddon bgColor="black">ETH</InputRightAddon>
              </InputGroup>
            </GridItem>

            <GridItem>
              <>
              <FormLabel>End Date</FormLabel>
              <Input type="date" />
              value={form.deadline}
            onChange={(e:any) => handleFormFieldChange('deadline', e)}
            </>
            </GridItem>

            <GridItem>
              <FormLabel mb="4">Campaign Poster</FormLabel>
                <input type="url"
                value={form.image}
                onChange={(e) => handleFormFieldChange('image', e)} />
              
            </GridItem>
          </Grid>
        </FormControl>
      </Flex>
      <Center>
        <Button
          mt="5"
          mb="10"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          _hover={{
            opacity: "0.8",
          }}
          size="lg"
          w="xs"
        >
          Submit
        </Button>
      </Center>
    </>
  );
};

export default NewCampaign;
