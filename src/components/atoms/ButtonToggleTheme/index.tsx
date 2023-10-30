/* --- libs --- */
import { Expand as ButtonTheme } from "@theme-toggles/react";

/* --- providers --- */
import { useTheme } from "@providers/ThemeProvider";

/* --- styles --- */
import { containerButtonToggleClass, iconClass } from "./styles";

export function ButtonToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={containerButtonToggleClass}>
            <ButtonTheme
                className={iconClass}
                toggled={theme === "dark"}
                toggle={toggleTheme}
                title={`Trocar de tema para ${theme === 'dark' ? 'claro' : 'escuro'}`}
                reversed
            />
        </div>
    );
}
