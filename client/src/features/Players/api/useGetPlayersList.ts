import { client } from "../../../common/api/client";
import { useQuery } from "@tanstack/react-query";

export type PlayerDetails = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  imageUrl: string;
};

const fetchPlayers =
  (id: number): (() => Promise<PlayerDetails[]>) =>
  () =>
    client.get(`/team/${id}/players`).then((response) => response.data);

export const useGetPlayersList = () => {
  const response = useQuery({
    queryKey: ["players"],
    queryFn: fetchPlayers(1),
  });

  return response;
};
