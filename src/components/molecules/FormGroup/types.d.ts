import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    text: string;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}
