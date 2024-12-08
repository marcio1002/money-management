/* --- utils --- */
import { css } from "@utils/css";

/* --- components --- */
import { CardAmount } from "@components/atoms/CardAmount";
import { CardLabel } from "@components/atoms/CardLabel";
import { CardThumbnail } from "@components/atoms/CardThumbnail";

/* --- styles --- */
import { recipeClass } from "./styles";

/* --- types --- */
import { CardRecipeProps } from "./types";

export function CardRecipe({ className = "", ...props }: CardRecipeProps) {
    return (
        <div className={css(recipeClass, className)} {...props}>
            <CardThumbnail
                className="bg-[#1F2836]"
                src="https://symfony.com/logos/symfony_white_03.png"
                alt="Logo symfony"
            />

            <CardLabel text="Symfony" />

            <CardAmount amount={300} />
        </div>
    );
}
