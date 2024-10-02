import { Box } from "@mui/material";
import { PlayersSearchBar } from "./PlayersSearchBar";
import { useState } from "react";
import { PlayersTable } from "./PlayersTable";
import { SectionHeading } from "../../common/components";
import { PlayerSearchOptions } from "./types";

export const PlayersList = () => {
  const [searchOptions, setSearchOptions] = useState<PlayerSearchOptions>({
    firstName: "",
    lastName: "",
    position: "",
  });
  return (
    <Box>
      <PlayersSearchBar
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
      <SectionHeading header="Players" />
      <PlayersTable search={searchOptions} />
    </Box>
  );
};
