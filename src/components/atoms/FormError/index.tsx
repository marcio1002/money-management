/* --- utils --- */
import { css } from "@utils/css";

/* --- types --- */
import { FormErrorProps } from "./types";

/* --- styles --- */
import { formErrorClass } from "./styles";

export function FormError({ text, className = "", ...props }: FormErrorProps) {
    return (
        <div className="w-full my-1">
            {!!text && (
                <span className={css(formErrorClass, className)} {...props}>
                    {text}
                </span>
            )}
        </div>
    );
}
