import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../services/usersApi";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: usersApi.getAll,
    staleTime: 1000 * 60 * 5, // caching for 5 minutes
  });
};
