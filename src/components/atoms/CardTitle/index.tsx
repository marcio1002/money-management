/* --- utils --- */
import { css } from "@utils/css";

/* --- types --- */
import { CardTitleProps } from "./types";

/* --- styles --- */
import { titleClass } from "./styles";

export function CardTitle({ text, children, className = "", ...props }: CardTitleProps) {
    return (
        <h3 className={css(titleClass, className)} {...props}>
            {children ?? text}
        </h3>
    )
}