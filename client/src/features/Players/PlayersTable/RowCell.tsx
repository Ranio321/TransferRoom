import { TableCell } from "@mui/material";

export const RowCell = ({ children }: { children: string }) => {
  return (
    <TableCell align="left" style={{ fontWeight: "bold" }}>
      {children}
    </TableCell>
  );
};
