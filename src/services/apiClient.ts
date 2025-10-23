
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/", // serves mock files from public/
  headers: { "Content-Type": "application/json" },
});
