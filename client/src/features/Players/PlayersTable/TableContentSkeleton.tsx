import { TableBody, TableRow, TableCell, Skeleton } from "@mui/material";

export const TableContentSkeleton = ({
  numberOfColumns,
  numberOfRows,
}: {
  numberOfColumns: number;
  numberOfRows: number;
}) => (
  <TableBody>
    {[...Array(numberOfRows)].map((_, index) => (
      <TableRow key={index + "skeleton"}>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={80} />
        </TableCell>
        {[...Array(numberOfColumns)].map((_, index) => (
          <TableCell key={index + "skeleton"}>
            <Skeleton variant="text" width={150} height={30} />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);
