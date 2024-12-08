/* --- components --- */
import { SidebarItem } from "@components/atoms/SidebarItem";

/* --- types --- */
import { SidebarMenuProps } from "./types";

/* --- styles --- */
import { navClass, ulClass } from "./styles";

export function SidebarMenu({ links, ...props }: SidebarMenuProps) {
    return (
        <nav className={navClass} {...props}>
            <ul className={ulClass}>
                {links.map((link) => (
                    <SidebarItem key={link.pathname} {...link} />
                ))}
            </ul>
        </nav>
    );
}
