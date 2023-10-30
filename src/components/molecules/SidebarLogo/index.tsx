/* --- assets --- */
import MoneyIcon from "@assets/icons/money-management.svg";

/* --- styles --- */
import { imgContainer, img, sidebarLogoClass, paragraph } from "./styles";

export function SidebarLogo() {
    return (
        <div className={sidebarLogoClass}>
            <figure className={imgContainer}>
                <img className={img} src={MoneyIcon} alt="Ícone de dinheiro em reais ilustrativo" />
            </figure>

            <p className={paragraph}>Money Management</p>
        </div>
    );
}
