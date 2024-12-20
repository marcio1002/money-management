/* --- main --- */
import { cloneElement } from "react";
import { Link, useLocation } from "react-router-dom";

/* --- utils --- */
import { css } from "@utils/css";

/* --- types --- */
import { SidebarItemProps } from "./types";

/* --- styles --- */
import { linkActiveClass, linkClass, linkInativeClass } from "./styles";

export function SidebarItem({ label, icon, pathname }: SidebarItemProps) {
    const location = useLocation();

    const isCurrentPathname = location.pathname === pathname;

    return (
        <li>
            <Link
                to={pathname}
                className={css(linkClass, isCurrentPathname ? linkActiveClass : linkInativeClass)}
            >
                {cloneElement(icon, { className: "text-lg" })}

                <span className="block">{label}</span>
            </Link>
        </li>
    );
}
