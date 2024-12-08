/* --- utils --- */
import { css } from "@utils/css";

/* --- types --- */
import { CardLabelProps } from "./types";

/* --- styles --- */
import { labelClass } from "./styles";

export function CardLabel({ text, children, className = "", ...props }: CardLabelProps) {
    return (
        <p className={css(labelClass, className)} {...props}>
            {children ?? text}
        </p>
    )
}