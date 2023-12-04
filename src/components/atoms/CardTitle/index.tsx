/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { titleClass } from "./styles";

/* --- contracts --- */
import { CardTitleProps } from "./types";

export function CardTitle({ text, children, className = "", ...props }: CardTitleProps) {
    return (
        <h3 className={css(titleClass, className)} {...props}>
            {children ?? text}
        </h3>
    )
}