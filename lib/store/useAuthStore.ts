import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      authStatus: false,
      authToken: "",
      addAuth: (authToken: string) =>
        set({ authStatus: true, authToken: authToken }),
      removeAuth: () => set({ authStatus: false, authToken: "" }),
    }),
    {
      name: "auth",
    }
  )
);
