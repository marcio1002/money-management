/* --- main --- */
import { forwardRef, Ref } from "react";

/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { selectClass } from "./styles";

/* --- types --- */
import { SelectProps } from "./types";

function SelectComponent({ children, className = "", ...props }: SelectProps, ref: Ref<HTMLSelectElement>) {
    return (
        <select className={css(selectClass, className)} ref={ref} {...props}>
            {children}
        </select>
    )
}


export const Select = forwardRef(SelectComponent);