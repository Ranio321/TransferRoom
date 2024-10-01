import "./App.css";
import { Box } from "@mui/material";
import { TeamsList } from "./features/Teams/TeamsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlayersList from "./features/Players/PlayersList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PlayersList />
      <Box display="flex" flexDirection="column">
        <TeamsList />
      </Box>
    </QueryClientProvider>
  );
};

export default App;
