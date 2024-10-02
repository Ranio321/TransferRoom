import { Box, Typography } from "@mui/material";

type PlayersListHeaderProps = {
  teamName?: string;
  imageUrl?: string;
};

export const PlayersListHeader = ({
  teamName,
  imageUrl,
}: PlayersListHeaderProps) => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <img src={imageUrl} alt="player-image" loading="lazy" />
      <Typography
        variant="h3"
        sx={{
          mb: 2,
          color: "#23085A",
          fontFamily: "sans",
          fontSize: "2.5rem",
          fontWeight: "700",
        }}
      >
        {teamName}
      </Typography>
    </Box>
  );
};
