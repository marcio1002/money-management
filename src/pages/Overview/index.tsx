
/* --- components --- */
import { Card } from "@components/atoms/Card";
import { CardTitle } from "@components/atoms/CardTitle";

/* --- styles --- */
import { overViewClass } from "./styles";
import { CardRecipe } from "@components/molecules/CardRecipe";

export default function OverViewPage() {
    return (
        <section id="overview" className={overViewClass}>
            {/* categorias */}
            <Card className="w-[310px] h-[300px]">
                <CardTitle text="Categoria de gasto" />

                <div className="w-full h-[200px] overflow-y-auto">
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

            {/* categoria dashboard pizza */}

            {/* porcentagem de gastos (semanal, mensal, trimestral, anual, anual+) */}

            {/* Quantidade de receitas e despesas */}

            {/* Lista dos 5 maiores gastos ou dos 5 maiores receitas */}
        </section>
    );
}
