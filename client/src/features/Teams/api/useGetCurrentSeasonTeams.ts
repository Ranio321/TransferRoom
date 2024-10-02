import { client } from "../../../common/api/client";
import { useQuery } from "@tanstack/react-query";

export type TeamDetails = {
  id: number;
  name: string;
  nickname?: string;
  imageUrl: string;
};

const fetchTeams = (): Promise<TeamDetails[]> =>
  client.get("/teams").then((response) => response.data);

export const useGetCurrentSeasonTeams = () => {
  const response = useQuery({ queryKey: ["teams"], queryFn: fetchTeams });

  return response;
};
