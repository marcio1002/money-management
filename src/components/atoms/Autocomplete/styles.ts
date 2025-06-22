/* --- utils --- */
import { css } from "@utils/css";

export const autocompleteClass = css`
    w-full
    relative
`;

export const inputClass = css`
    w-full
    p-2
    border-2
    border-green-400
    focus:border-orange-400
    focus-visible:border-orange-400
    focus-visible:outline-0
    text-md
    text-black
    rounded-md
`;

export const listClass = css`
    flex
    flex-col
    gap-1
    w-full
    h-[250px]

    absolute
    z-10
    overflow-x-hidden
    overflow-y-auto
    bg-white
    shadow-lg
    dark:shadow-slate-100
`;

export const listItemClass = css`

`;