import { client } from "../../../common/api/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PlayerDetails, TeamDetails } from "../types";

export type TeamWithPlayers = {
  teamDetails: TeamDetails;
  playersDetails: PlayerDetails[];
};

const fetchPlayers =
  (id: string): (() => Promise<TeamWithPlayers>) =>
  () =>
    client.get(`/team/${id}/players`).then((response) => response.data);

export const useGetTeamWithPlayers = (teamId: string) => {
  const response = useQuery({
    queryKey: [`teamWithPlayers_${teamId}`],
    queryFn: fetchPlayers(teamId),
    retry: 3,
  });

  return { ...response, error: response.error as AxiosError };
};
