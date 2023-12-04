import { HTMLAttributes } from "react";

export interface CardAmountProps extends HTMLAttributes<HTMLSpanElement> {
    amount: string | number;
}
