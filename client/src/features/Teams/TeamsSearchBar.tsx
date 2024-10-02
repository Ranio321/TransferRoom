import { Box } from "@mui/material";
import { SectionHeading, TextSearch } from "../../common/components";
import { TeamSearchOptions } from "./types";

export type TeamsSearchBarProps = {
  searchOptions: TeamSearchOptions;
  setSearchOptions: (value: TeamSearchOptions) => void;
};

export const TeamsSearchBar = ({
  searchOptions,
  setSearchOptions,
}: TeamsSearchBarProps) => {
  return (
    <>
      <SectionHeading header="Filters" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        gap={2}
      >
        <TextSearch
          sx={{ paddingBottom: 5, width: 400 }}
          label="Search by name"
          value={searchOptions.name}
          onChange={(name: string) => {
            setSearchOptions({ ...searchOptions, name });
          }}
        />
        <TextSearch
          sx={{ paddingBottom: 5, width: 400 }}
          label="Search by nickname"
          value={searchOptions.nickname}
          onChange={(nickname: string) => {
            setSearchOptions({ ...searchOptions, nickname });
          }}
        />
      </Box>
    </>
  );
};
