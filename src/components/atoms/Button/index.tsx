/* --- utils --- */
import { css } from "@utils/css";

/* --- contracts --- */
import { ButtonProps } from "./types";

/* --- styles --- */
import { buttonClass } from "./styles";

export function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <Button className={css(buttonClass, className)} {...props}>
            {children}
        </Button>
    )
}