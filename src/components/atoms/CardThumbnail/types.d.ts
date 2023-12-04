import { HTMLAttributes } from "react";

export interface CardThumbnailProps extends HTMLAttributes<HTMLDivElement> {
    src: string;
    alt: string;
    imgClassName?: string;
}
