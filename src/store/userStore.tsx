import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;