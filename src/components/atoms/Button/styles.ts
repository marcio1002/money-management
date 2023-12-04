/* --- utils --- */
import { css } from "@utils/css";

export const buttonClass = css`
    flex
    gap-1
    items-center
    justify-center
    mt-auto
    p-2
    px-3
    bg-green-400
    rounded-xl
    align-middle
    text-sm
    cursor-pointer
    hover:saturate-[.85]
    disabled:saturate-[.45]
    disabled:cursor-not-allowed
`;
