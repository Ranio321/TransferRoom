import { Box } from "@mui/material";
import { PlayerSearchOptions } from "./PlayersList";
import { SectionHeading, TextSearch } from "../../common/components";

export type PlayersSearchBarProps = {
  searchOptions: PlayerSearchOptions;
  setSearchOptions: (value: PlayerSearchOptions) => void;
};

export const PlayersSearchBar = ({
  searchOptions,
  setSearchOptions,
}: PlayersSearchBarProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: 5 }}>
      <SectionHeading header="Filters" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        gap={2}
      >
        <TextSearch
          sx={{ width: 300 }}
          label="Search by first name"
          value={searchOptions.firstName}
          onChange={(value: string) => {
            setSearchOptions({ ...searchOptions, firstName: value });
          }}
        />
        <TextSearch
          sx={{ width: 300 }}
          label="Search by last name"
          value={searchOptions.lastName}
          onChange={(value: string) => {
            setSearchOptions({ ...searchOptions, lastName: value });
          }}
        />
        <TextSearch
          sx={{ width: 300 }}
          label="Search by position"
          value={searchOptions.position}
          onChange={(value: string) => {
            setSearchOptions({ ...searchOptions, position: value });
          }}
        />
      </Box>
    </Box>
  );
};
