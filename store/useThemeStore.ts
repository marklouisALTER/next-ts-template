import { ThemeTypes } from "@/types/theme";
import { create } from "zustand";

export const useThemeStore = create<ThemeTypes>(() => ({
    theme: "day",
    setThemeStore: () => ((state: ThemeTypes) => ({
        theme: state.theme === "day" ? "night" : "day"
    }))
}))