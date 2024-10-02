import { Box } from "@mui/material";
import { PlayersSearchBar } from "./PlayersSearchBar";
import { useState } from "react";
import { PlayersTable } from "./PlayersTable";
import { SectionHeading } from "../../common/components";
import { PlayerSearchOptions } from "./types";
import { useGetTeamWithPlayers } from "./api/useGetTeamWithPlayers";
import { Navigate, useParams } from "react-router-dom";
import { PlayersListHeader } from "./PlayersListHeader";

export const PlayersList = () => {
  const { teamId } = useParams();
  if (!teamId) return <Navigate to={"/"} />;

  const queryResult = useGetTeamWithPlayers(teamId);

  const [searchOptions, setSearchOptions] = useState<PlayerSearchOptions>({
    firstName: "",
    lastName: "",
    position: "",
  });

  const playetsListHeaderData = {
    ...queryResult.data?.teamDetails,
    teamName: queryResult.data?.teamDetails.name,
  };
  return (
    <Box>
      <PlayersListHeader {...playetsListHeaderData} />
      <PlayersSearchBar
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
      <SectionHeading header="Players" />
      <PlayersTable
        search={searchOptions}
        {...queryResult}
        playersDetails={queryResult.data?.playersDetails}
      />
    </Box>
  );
};
