import { Box, Paper, Typography } from "@mui/material";
import { TeamCard, TeamCardSkeleton } from "./TeamCard";
import {
  TeamDetails,
  useGetCurrentSeasonTeams,
} from "./api/useGetCurrentSeasonTeams";
import { UseQueryResult } from "@tanstack/react-query";

type TeamsCardsProps = {
  search: string;
};

export const TeamsCards = ({ search }: TeamsCardsProps) => {
  const queryResult = useGetCurrentSeasonTeams();

  return (
    <Paper elevation={1} sx={{ backgroundColor: "#FAFBFB" }}>
      <Box
        display="flex"
        gap="1.5rem"
        flexWrap="wrap"
        justifyContent="center"
        padding="20px"
      >
        <TeamsCardsContent search={search} queryResult={queryResult} />
      </Box>
    </Paper>
  );
};

type TeamsCardsContentProps = {
  search: string;
  queryResult: UseQueryResult<TeamDetails[], Error>;
};
export const TeamsCardsContent = ({
  search,
  queryResult: { isError, isLoading, data: teamsDetails },
}: TeamsCardsContentProps) => {
  if (isError) {
    return (
      <Typography>Something went wrong. Please try again later.</Typography>
    );
  }
  if (isLoading) {
    return <TeamsCardsSkeleton />;
  }

  const filteredTeamsDetails = teamsDetails?.filter(
    (team) =>
      !search ||
      search === "" ||
      team.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!filteredTeamsDetails || filteredTeamsDetails.length === 0) {
    return (
      <Typography>
        No teams available. Please change search criteria.
      </Typography>
    );
  }

  return (
    <>
      {filteredTeamsDetails?.map((teamData) => (
        <TeamCard key={teamData.id} {...teamData} />
      ))}
    </>
  );
};

const TeamsCardsSkeleton = () => {
  return [...Array(20)].map((_, index) => <TeamCardSkeleton key={index} />);
};
