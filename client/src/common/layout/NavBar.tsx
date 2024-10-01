import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "60px" }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#36003C",
        }}
      >
        <Toolbar
          style={{ display: "flex", justifyContent: "flex-start", gap: 40 }}
        >
          <Link to={"/"}>
            <img
              style={{ width: "48px", height: "48px", border: "none" }}
              src="/premier-league.png"
              alt="logo"
            />
          </Link>
          <Link to="/" style={{ color: "white" }}>
            <Typography variant="h6" component="div">
              Teams
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
