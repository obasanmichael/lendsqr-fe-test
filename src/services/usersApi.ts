import type { User } from "../types/types";
import { axiosClient } from "./apiClient";

export const usersApi = {
  async getAll(): Promise<User[]> {
    const { data } = await axiosClient.get("/lendsqr_assessment.json");
    return data;
  },
};
