
/* --- components --- */
import { Card } from "@components/atoms/Card";
export default function OverViewPage() {
    return (
        <section id="overview">

            <Card>
                <p>Categoria de gasto</p>
            </Card>

            <Card>
                <p>Gasto do Mês anterior</p>
            </Card>

            <Card>
                <p>Gasto Anual</p>
            </Card>
        </section>
    );
}
