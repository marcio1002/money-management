import { ReactNode } from "react";

export type ThemeType = "dark" | "light";

export interface ThemeProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}
