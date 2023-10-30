import { useRef } from "react";


export function useDebounce() {
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    return (func: (...props: any[]) => any, time?: number) => {
        timeoutId.current && clearTimeout(timeoutId.current);

        return (...props: any[]) => {
            timeoutId.current = setTimeout(() => {
                func(...props);
                timeoutId.current = null;
            }, time)
        }
    }
}