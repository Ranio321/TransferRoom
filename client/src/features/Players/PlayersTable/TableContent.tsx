import {
  TableRow,
  TableBody,
  TableCell,
  styled,
  Typography,
} from "@mui/material";
import { toUpperCase } from "../../../common/utils";
import { PlayerDetails } from "../api/useGetPlayersList";
import { RowCell } from "./RowCell";
import { AxiosError } from "axios";
import { PlayerSearchOptions } from "../types";

const getDate = (date: string) => {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString("en-GB").substring(0, 10);
};

type TableContentProps = {
  search: PlayerSearchOptions;
  playersDetails?: PlayerDetails[];
  error?: AxiosError;
};

const applyPlayersSearchFilter = (filterValue: string, playerValue: string) =>
  filterValue === "" ||
  playerValue.toLowerCase().includes(filterValue.toLowerCase());

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TableContent = ({
  playersDetails,
  search,
  error,
}: TableContentProps) => {
  const filteredPlayersDetails = playersDetails?.filter((player) => {
    const firstNameFilterResult = applyPlayersSearchFilter(
      search.firstName,
      player.firstName
    );

    const lastNameFilterResult = applyPlayersSearchFilter(
      search.lastName,
      player.lastName
    );
    const positionFilterResult = applyPlayersSearchFilter(
      search.position,
      player.position
    );

    return (
      firstNameFilterResult && lastNameFilterResult && positionFilterResult
    );
  });

  if (error) {
    if (error.status === 404) {
      return (
        <ErrorMessage>
          There are no players available for selected team. Please choose
          different team.
        </ErrorMessage>
      );
    }
    return (
      <ErrorMessage>Something went wrong. Please try again later.</ErrorMessage>
    );
  }
  if (!filteredPlayersDetails || filteredPlayersDetails.length === 0) {
    return (
      <ErrorMessage>
        No players available. Please change search criteria.
      </ErrorMessage>
    );
  }
  return (
    <TableBody>
      {filteredPlayersDetails?.map((player) => (
        <StyledTableRow
          key={player.firstName + player.lastName}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">
            <img
              src={player.imageUrl}
              alt="player-image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://resources.premierleague.com/premierleague/photos/players/40x40/Photo-Missing.png";
              }}
              loading="lazy"
            />
          </TableCell>
          <RowCell>{player.firstName}</RowCell>
          <RowCell>{player.lastName}</RowCell>
          <RowCell>{toUpperCase(player.position)}</RowCell>
          <RowCell>{getDate(player.birthDate)}</RowCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

const ErrorMessage = ({ children }: { children: string }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={5}>
          <Typography textAlign="center">{children}</Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
