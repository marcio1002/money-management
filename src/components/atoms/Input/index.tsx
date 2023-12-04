/* --- main --- */
import { LegacyRef, forwardRef } from "react";

/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { inputClass } from "./styles";

/* --- contracts --- */
import { InputProps } from "./types";

function InputComponent({ className = "", ...props }: InputProps, ref?: LegacyRef<HTMLInputElement>) {
    return <input className={css(inputClass, className)} {...props} ref={ref} />;
}

export const Input = forwardRef(InputComponent);
