import { Box } from "@mui/material";
import { useState } from "react";
import { TeamsCards } from "./TeamsCards";
import { SectionHeading, TextSearch } from "../../common/components";

export const TeamsList = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <SectionHeading header="Filters" />
        <TextSearch
          sx={{ paddingBottom: 5, width: 400 }}
          label="Search by name"
          value={search}
          onChange={(value: string) => {
            setSearch(value);
          }}
        />
        <SectionHeading header="Teams" />
        <TeamsCards search={search} />
      </Box>
    </>
  );
};
