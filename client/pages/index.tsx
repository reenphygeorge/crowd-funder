import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CampaignCard } from "../components/campaignCard";
import campaignData from "../utils/campaignData.json";

interface campaignDataInterface {
  campaignID: String;
  category: String;
  campaignName: String;
  currentAmount: String;
  requiredAmount: String;
  daysLeft: String;
  hostID: String;
}

const Home: NextPage = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Heading mb="10" size="md" fontWeight="800">
          All Campaigns
        </Heading>
        <Heading mb="10" size="md" fontWeight="800">
          &nbsp;(8)
        </Heading>
      </Flex>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={10}
        justifyItems="center"
        mb="12"
      >
        {campaignData.map(
          ({
            campaignID,
            category,
            campaignName,
            currentAmount,
            requiredAmount,
            daysLeft,
            hostID,
          }: campaignDataInterface) => (
            <GridItem>
              <CampaignCard
                key={campaignID as string}
                category={category}
                campaignName={campaignName}
                currentAmount={currentAmount}
                requiredAmount={requiredAmount}
                daysLeft={daysLeft}
                hostID={hostID}
              />
            </GridItem>
          )
        )}
      </Grid>
    </>
  );
};

export default Home;
