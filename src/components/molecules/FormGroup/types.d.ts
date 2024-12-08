import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    text: string;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    required?: boolean;
}
