import { Paper, Box, Typography } from "@mui/material";
import {
  TeamDetails,
  useGetCurrentSeasonTeams,
} from "./api/useGetCurrentSeasonTeams";
import { TeamCard } from "./TeamCard";
import { useState } from "react";
import { TextSearch } from "../../common/components/TextSearch";
import { SectionHeading } from "../../common/components/SectionHeading";
import { UseQueryResult } from "@tanstack/react-query";

export const TeamsList = () => {
  const [search, setSearch] = useState("");
  const currentSeasonTeamsResponse = useGetCurrentSeasonTeams();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <SectionHeading header="Club Search" />
        <TextSearch
          sx={{ paddingBottom: 5, width: 400 }}
          label="Search Clubs"
          value={search}
          onChange={(value: string) => {
            setSearch(value);
          }}
        />
        <SectionHeading header="Club List" />
        <Paper elevation={1} sx={{ backgroundColor: "rgb(249, 247, 247)" }}>
          <Box
            display="flex"
            gap="1.5rem"
            flexWrap="wrap"
            justifyContent="center"
            padding="20px"
          >
            <TeamsCards queryResult={currentSeasonTeamsResponse} />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

type TeamsCardsProps = {
  queryResult: UseQueryResult<TeamDetails[], Error>;
};
const TeamsCards = ({
  queryResult: { data, isError, isLoading },
}: TeamsCardsProps) => {
  if (isError) {
    return (
      <Typography>Something went wrong. Please try again later.</Typography>
    );
  }
  if (isLoading) {
    return <Typography>Loading data.</Typography>;
  }

  if (!data || data.length === 0) {
    return (
      <Typography>
        No clubs available. Please change search criteria.
      </Typography>
    );
  }

  return (
    <>
      {data?.map((x) => (
        <TeamCard {...x} />
      ))}
    </>
  );
};
