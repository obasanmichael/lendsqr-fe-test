import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/types";

interface UserState {
  selectedUser: User | null;
  search: string;
  currentPage: number;
  setSelectedUser: (user: User | null) => void;
  setSearch: (search: string) => void;
  setCurrentPage: (page: number) => void;
}

 const useUsersStore = create<UserState>()(
  persist(
    (set) => ({
      selectedUser: null,
      search: "",
      currentPage: 1,
      setSelectedUser: (user) => set({ selectedUser: user }),
      setSearch: (search) => set({ search }),
      setCurrentPage: (page) => set({ currentPage: page }),
    }),
    { name: "user-store" } // Saves in localStorage
  )
 );

export default useUsersStore;
