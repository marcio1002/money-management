/* --- utils --- */
import { css } from "@utils/css";

export const linkClass = css`
    block
    flex
    gap-2
    items-center
    w-full
    rounded-lg
    p-2
    px-3
    font-bold
    transition-colors
`;

export const linkActiveClass = css`
    text-slate-600
    bg-green-400
    hover:saturate-[.85]
    shadow-md
    shadow-green-400/30
`;
export const linkInativeClass = css`
    text-slate-600
    dark:text-white
    hover:bg-green-100
    hover:dark:text-slate-600
`;
