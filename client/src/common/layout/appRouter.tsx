import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { Root } from "./Root";
import { TeamsList } from "../../features/Teams";
import { PlayersList } from "../../features/Players";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TeamsList />,
      },
      {
        path: "/team/:teamId",
        element: <PlayersList />,
      },
    ],
  },
]);
