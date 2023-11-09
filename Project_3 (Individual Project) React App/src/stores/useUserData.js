import { create } from "zustand";
import { persist } from "zustand/middleware";

const UserData = (set) => ({
    isLoginValid: false,
    setLoginValid: (value) => {
        set({ isLoginValid: value });
    },
    user: {},
    allUsers: [],
    fetchUsersData: async () => {
        const response = await fetch("https://jsonplaceholder.org/users");
        set({ allUsers: await response.json() });
    },
    setUser: (data) => {
        set({ user: data });
    },
    removeUser: () => {
        set({
            user: {},
        });
    },
    removeAllUsers: () => {
        set({ allUsers: [] });
    },
});

export const useUserData = create(persist(UserData, { name: "user-data" }));
