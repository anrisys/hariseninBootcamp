import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { persist } from "zustand/middleware";

const PostData = (set) => ({
    postData: [],
    fetchPostData: async () => {
        const response = await fetch("https://jsonplaceholder.org/posts");
        set({ postData: await response.json() });
    },
    removePostData: () => {
        set({ postData: [] });
    },
});

export const usePostData = create(persist(PostData, { name: "post-data" }));
