/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { labelClass } from "./styles";

/* --- types --- */
import { LabelProps } from "./types";

export function Label({ text, className = "", ...props }: LabelProps) {
    return (
        <label className={css(labelClass, className)} {...props}>
            {text}
        </label>
    );
}
