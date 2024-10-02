import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { HeaderCell } from "./HeaderCell";
import { TableContent } from "./TableContent";
import { TableContentSkeleton } from "./TableContentSkeleton";
import { PlayerDetails, PlayerSearchOptions } from "../types";
import { AxiosError } from "axios";

type PlayersTableProps = {
  search: PlayerSearchOptions;
  isLoading: boolean;
  error: AxiosError;
  playersDetails?: PlayerDetails[];
};

export const PlayersTable = ({
  search,
  isLoading,
  playersDetails,
  error,
}: PlayersTableProps) => {
  return (
    <Paper sx={{ backgroundColor: "#FAFBFB", padding: "2rem" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHeader />
          {isLoading ? (
            <TableContentSkeleton numberOfColumns={4} numberOfRows={8} />
          ) : (
            <TableContent
              playersDetails={playersDetails}
              search={search}
              error={error}
            />
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
};

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell width="10%"></TableCell>
        <HeaderCell>First name</HeaderCell>
        <HeaderCell>Last name</HeaderCell>
        <HeaderCell>Position</HeaderCell>
        <HeaderCell>Birth date</HeaderCell>
      </TableRow>
    </TableHead>
  );
};
