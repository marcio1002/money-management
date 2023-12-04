/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { formGroupClass } from "./styles";

/* --- components --- */
import { Label } from "@components/atoms/Label";

/* --- contracts --- */
import { FormGroupProps } from "./types";

export function FormGroup({ id, text, labelProps, children, className = "", ...props }: FormGroupProps) {
    return (
        <div className={css(formGroupClass, className)} {...props}>
            <Label text={text} htmlFor={id} {...labelProps} />

            {children}
        </div>
    );
}
