import { SidebarItemProps } from "@components/atoms/SidebarItem/types";
import { HTMLAttributes } from "react";

export interface SidebarMenuProps extends HTMLAttributes<HTMLElement> {
    links: SidebarItemProps[];
}
