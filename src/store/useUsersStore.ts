import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/types";

// Define a type for your filter object
interface UserFilters {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}

interface UserState {
  selectedUser: User | null;
  search: string;
  currentPage: number;
  filters: UserFilters;
  setSelectedUser: (user: User | null) => void;
  setSearch: (search: string) => void;
  setCurrentPage: (page: number) => void;
  setFilters: (filters: Partial<UserFilters>) => void;
  resetFilters: () => void;
}

const useUsersStore = create<UserState>()(
  persist(
    (set) => ({
      selectedUser: null,
      search: "",
      currentPage: 1,
      filters: {},

      setSelectedUser: (user) => set({ selectedUser: user }),
      setSearch: (search) => set({ search }),
      setCurrentPage: (page) => set({ currentPage: page }),

      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

      resetFilters: () => set({ filters: {} }),
    }),
    { name: "user-store" } // Saves in localStorage
  )
);

export default useUsersStore;
