/* --- main --- */
import { LegacyRef, forwardRef } from "react";

/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { textAreaClass } from "./styles";

/* --- contracts --- */
import { TextareaProps } from "./types";

function TextareaComponent({ className = "", ...props }: TextareaProps, ref?: LegacyRef<HTMLTextAreaElement>) {
    return <textarea className={css(textAreaClass, className)} rows={5} {...props} ref={ref}></textarea>;
}

export const Textarea = forwardRef(TextareaComponent);
