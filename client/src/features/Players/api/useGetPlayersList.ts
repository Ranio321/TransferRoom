import { client } from "../../../common/api/client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type PlayerDetails = {
  firstName: string;
  lastName: string;
  birthDate: string;
  imageUrl: string;
  position: string;
};

const fetchPlayers =
  (id: string): (() => Promise<PlayerDetails[]>) =>
  () =>
    client.get(`/team/${id}/players`).then((response) => response.data);

export const useGetPlayersList = (teamId: string) => {
  const response = useQuery({
    queryKey: [`players_${teamId}`],
    queryFn: fetchPlayers(teamId),
    retry: 3,
  });

  return { ...response, error: response.error as AxiosError };
};
