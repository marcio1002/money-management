/* --- components --- */
import { SidebarMenu } from "@components/molecules/SidebarMenu";
import { SidebarLogo } from "@components/molecules/SidebarLogo";
import { SidebarBottom } from "@components/molecules/SidebarBottom";
import { AiFillHome } from "react-icons/ai"
import { MdCategory } from "react-icons/md"

/* --- styles --- */
import { sidebarClass, sidebarMenuContainerClass } from "./styles";

const links = [
    { label: "Visão Geral", pathname: "/", icon: <AiFillHome /> },
    { label: "Categorias", pathname: "categories", icon: <MdCategory /> },
];

export function Sidebar() {
    return (
        <div className={sidebarClass}>
            <SidebarLogo />

            <div className={sidebarMenuContainerClass}>
                <SidebarMenu links={links} />
            </div>

            <SidebarBottom />
        </div>
    );
}
