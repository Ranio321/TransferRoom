import { Box } from "@mui/material";
import { NavBar } from "./NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Root = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
    </Box>
  );
};
