/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { formErrorClass } from "./styles";

/* --- contracts --- */
import { FormErrorProps } from "./types";

export function FormError({ text, isError, className = "", ...props }: FormErrorProps) {
    return (
        <div className="w-full my-1">
            {isError && (
                <span className={css(formErrorClass, className)} {...props}>
                    {text}
                </span>
            )}
        </div>
    );
}
