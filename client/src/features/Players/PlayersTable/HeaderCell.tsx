import { TableCell } from "@mui/material";

export const HeaderCell = ({ children }: { children: string }) => {
  return (
    <TableCell
      align="left"
      style={{ fontWeight: "bold", color: "rgb(135, 102, 138)" }}
      width="25%"
    >
      {children}
    </TableCell>
  );
};
