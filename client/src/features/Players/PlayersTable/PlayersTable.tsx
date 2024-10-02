import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useParams, Navigate } from "react-router-dom";
import { useGetPlayersList } from "../api/useGetPlayersList";
import { HeaderCell } from "./HeaderCell";
import { TableContent } from "./TableContent";
import { TableContentSkeleton } from "./TableContentSkeleton";
import { PlayerSearchOptions } from "../types";

type PlayersTableProps = {
  search: PlayerSearchOptions;
};

export const PlayersTable = ({ search }: PlayersTableProps) => {
  const { teamId } = useParams();
  if (!teamId) return <Navigate to={"/"} />;

  const { isLoading, data: playersDetails, error } = useGetPlayersList(teamId);

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
