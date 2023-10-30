/* --- main --- */
import { createContext, useContext, useEffect, useState } from "react";

/* --- contracts --- */
import { ThemeProps, ThemeProviderProps, ThemeType } from "./types";

const ThemeContext = createContext({} as ThemeProps);

const storageKeyTheme = "next";

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeType>(
        () => (window.localStorage.getItem(storageKeyTheme) as ThemeType) ?? "dark"
    );

    function toggleTheme() {
        setTheme((t) => {
            const changeTheme = t === "dark" ? "light" : "dark";

            window.localStorage.setItem(storageKeyTheme, changeTheme);

            return changeTheme;
        });
    }

    useEffect(() => {
        const html = document.querySelector("html");

        html?.classList?.remove("dark", "light");
        html?.classList?.add(theme);
    }, [theme]);

    const data: ThemeProps = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
