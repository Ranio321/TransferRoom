import { Box, Paper, Typography } from "@mui/material";
import { TeamCard, TeamCardSkeleton } from "./TeamCard";
import {
  TeamDetails,
  useGetCurrentSeasonTeams,
} from "./api/useGetCurrentSeasonTeams";
import { UseQueryResult } from "@tanstack/react-query";
import { TeamSearchOptions } from "./types";

type TeamsCardsProps = {
  search: TeamSearchOptions;
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

const applyPlayersSearchFilter = (filterValue: string, teamValue?: string) =>
  filterValue === "" ||
  (teamValue && teamValue.toLowerCase().includes(filterValue.toLowerCase()));

type TeamsCardsContentProps = {
  search: TeamSearchOptions;
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

  const filteredTeamsDetails = teamsDetails?.filter((team) => {
    const nameFilterResult = applyPlayersSearchFilter(search.name, team.name);
    const nicknameFilterResult = applyPlayersSearchFilter(
      search.nickname,
      team.nickname
    );

    return nameFilterResult && nicknameFilterResult;
  });
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
