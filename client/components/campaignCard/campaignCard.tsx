import {
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

interface campaignData {
  category: String;
  campaignName: String;
  currentAmount: String;
  requiredAmount: String;
  daysLeft: String;
  hostID: String;
}

export const CampaignCard = ({
  category,
  campaignName,
  currentAmount,
  requiredAmount,
  daysLeft,
  hostID,
}: campaignData) => {
  return (
    <Card maxW="xs" backgroundColor="#191a1c" borderRadius="lg">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="4" spacing="6">
          <Text fontWeight="700" color="gray.400" fontSize="md">
            {category}
          </Text>
          <Heading fontWeight="600" size="md" color="#e7e8e8">
            {campaignName}
          </Heading>
          <Flex justifyContent="space-between">
            <Flex direction="column">
              <Text fontWeight="600" color="#e7e8e8">
                {currentAmount}
              </Text>
              <Text fontWeight="500" color="gray.400">
                Raised of {requiredAmount}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text color="#e7e8e8" fontWeight="600">
                {daysLeft}
              </Text>
              <Text color="gray.400" fontWeight="500">
                Days left
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Text color="gray.300" fontWeight="500">
              by &nbsp;
            </Text>
            <Text color="gray.300" fontWeight="600">
              {hostID}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
