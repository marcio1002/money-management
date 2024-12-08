/* --- utils --- */
import { css } from "@utils/css";
import { formatPrice } from "@utils/formatPrice";

/* --- styles --- */
import { labelClass } from "./styles";

/* --- types --- */
import { CardAmountProps } from "./types";

export function CardAmount({ amount, children, className = "", ...props }: CardAmountProps) {
    return (
        <span className={css(labelClass, className)} {...props}>
            {formatPrice(amount)}
        </span>
    )
}