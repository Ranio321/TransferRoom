import { Box } from "@mui/material";
import { useState } from "react";
import { TeamsCards } from "./TeamsCards";
import { SectionHeading } from "../../common/components";
import { TeamSearchOptions } from "./types";
import { TeamsSearchBar } from "./TeamsSearchBar";

export const TeamsList = () => {
  const [searchOptions, setSearchOptions] = useState<TeamSearchOptions>({
    name: "",
    nickname: "",
  });

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <TeamsSearchBar
          searchOptions={searchOptions}
          setSearchOptions={setSearchOptions}
        />
        <SectionHeading header="Teams" />
        <TeamsCards search={searchOptions} />
      </Box>
    </>
  );
};
