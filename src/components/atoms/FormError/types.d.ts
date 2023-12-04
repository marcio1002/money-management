import { HTMLAttributes } from "react";

export interface FormErrorProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    isError: boolean;
}
