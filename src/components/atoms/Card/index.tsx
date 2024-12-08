/* --- utils --- */
import { css } from "@utils/css";

/* --- types --- */
import { CardProps } from "./types"

/* --- styles --- */
import { cardClass } from "./styles";

export function Card({ children, className = "", ...props }: CardProps) {
    return (
        <div className={css(cardClass, className)} {...props}>
            {children}
        </div>
    )
}