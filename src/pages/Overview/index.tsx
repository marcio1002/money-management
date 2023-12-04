
/* --- components --- */
import { Card } from "@components/atoms/Card";
import { CardTitle } from "@components/atoms/CardTitle";

/* --- styles --- */
import { overViewClass } from "./styles";
import { CardRecipe } from "@components/molecules/CardRecipe";

export default function OverViewPage() {
    return (
        <section id="overview" className={overViewClass}>
            <Card className="w-[310px] h-[300px]">
                <CardTitle text="Categoria de gasto" />

                <div className="w-12/12 h-[200px] overflow-y-auto">
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                    <CardRecipe />
                </div>
            </Card>
        </section>
    );
}
