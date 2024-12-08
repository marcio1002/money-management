/* --- utils --- */
import { css } from "@utils/css";

/* --- components --- */
import { Label } from "@components/atoms/Label";

/* --- types --- */
import { FormGroupProps } from "./types";

/* --- styles --- */
import { formGroupClass, spanRequiredClass } from "./styles";

export function FormGroup({ name, text, labelProps, children, required = false, className = "", ...props }: FormGroupProps) {
    return (
        <div className={css(formGroupClass, className)} {...props}>
            <Label text={text} htmlFor={name} {...labelProps} />
            {required && <span className={spanRequiredClass}>*</span>}

            {children}
        </div>
    );
}
