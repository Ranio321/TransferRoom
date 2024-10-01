import { Box } from "@mui/material";
import { PlayersSearchBar } from "./PlayersSearchBar";
import { SectionHeading } from "../../common/components/SectionHeading";
import { useState } from "react";
import { PlayersTable } from "./PlayersTable";

export type PlayerSearchOptions = {
  firstName: string;
  lastName: string;
  position: string;
};

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
