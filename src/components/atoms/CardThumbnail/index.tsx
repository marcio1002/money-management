/* --- utils --- */
import { css } from "@utils/css";

/* --- styles --- */
import { boxImgClass, imgClass } from "./styles";

/* --- contracts --- */
import { CardThumbnailProps } from "./types";

export function CardThumbnail({ src, imgClassName = "", className = "", ...props }: CardThumbnailProps) {
    return (
        <div className={css(boxImgClass, className)} {...props}>
            <img className={css(imgClass, imgClassName)} src={src} />
        </div>
    )
}