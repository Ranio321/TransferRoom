import { Box } from "@mui/material";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Box>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
