/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { labelClass } from "./styles";

/* --- contracts --- */
import { CardLabelProps } from "./types";

export function CardLabel({ text, children, className = "", ...props }: CardLabelProps) {
    return (
        <p className={css(labelClass, className)} {...props}>
            {children ?? text}
        </p>
    )
}