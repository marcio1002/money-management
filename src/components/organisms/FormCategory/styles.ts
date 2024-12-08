import { css } from "@utils/css";

export const formCategoryClass = css`
    w-10/12
    lg:w-5/12
    xl:w-4/12
    h-screen
    mx-auto
    flex
    justify-center
    items-center
    py-5
    px-3
`;
export const infoFileImageClass = css`
    text-xs
    text-slate-600
    dark:text-slate-200
`;

export const boxImagePreviewClass = css`
    w-[150px]
    h-[150px]
    rounded-full
    shadow-md
    shadow-gray-400
    overflow-hidden
    mt-3
    mb-2
    cursor-pointer
`;

export const imagePreviewClass = css`
    w-full
    h-full
    object-cover
`;
