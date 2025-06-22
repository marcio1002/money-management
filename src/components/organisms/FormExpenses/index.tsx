/* --- main --- */
import { FocusEvent, KeyboardEvent } from "react";

/* --- libs --- */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

/* --- utils --- */
import { formatPrice, formatPriceToNumber } from "@utils/formatPrice";

/* --- components --- */
import { Button } from "@components/atoms/Button";
import { FormGroup } from "@components/molecules/FormGroup";
import { FormError } from "@components/atoms/FormError";
import { Input } from "@components/atoms/Input";
import { Select } from "@components/atoms/Select";
import { Textarea } from "@components/atoms/Textarea";
import { Autocomplete } from "@components/atoms/Autocomplete";

/* --- styles --- */
import { formExpensesClass } from "./styles";

const keysIgnores = ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Backspace"];

const types = [
    { name: "Fixo", value: "fixed" },
    { name: "Variável", value: "variable" },
]
const typesValues = types.map(t => t.value);

const periods = [
    { name: "Diário", value: "daily" },
    { name: "Semanal", value: "weekly" },
    { name: "Mensal", value: "monthly" },
    { name: "Anual", value: "yearly" },
];
const periodsValues = periods.map(p => p.value);

const schema = z.object({
    name: z.string().nonempty({ message: "Preencha o campo nome" }),
    price: z
        .string()
        .nonempty({ message: "Preencha o campo preço" })
        .refine(
            value => !isNaN(formatPriceToNumber(value)),
            { message: "Preencha um valor válido" }
        ),
    category: z
        .string()
        .nonempty({ message: "Selecione uma categoria" }),
    type: z
        .string()
        .nonempty({ message: "Selecione um tipo" })
        .refine(
            value => typesValues.includes(value),
            { message: "Selecione um tipo válido" }
        ),
    period: z
        .string()
        .refine(
            value => periodsValues.includes(value),
            { message: "Selecione um período válido" }
        ),
    date: z
        .any()
        .refine(value => dayjs(value, "YYYY-MM-DD", true).isValid(), { message: "Data inválida" })
        .refine(
            value => dayjs(value, "YYYY-MM-DD", true).isSame(dayjs(), "days") || dayjs(value, "YYYY-MM-DD", true).isBefore(dayjs(), "days"),
            { message: "A data não pode ser maior que a data atual" }
        ),
    observation: z
        .string()
        .refine((value) => !value || value && value.length > 8, {
            message: "O campo observação precisa ter pelo menos 8 caracteres",
        })
        .optional(),
})
    .refine(
        ({ type, period }) => type === 'fixed' && period?.trim()?.length > 0,
        { message: "Selecione um período para despesas fixas", path: ["period"] },
    )
    .refine(
        ({ type, date }) => type === 'variable' && date?.trim()?.length > 0,
        { message: "Selecione uma data para despesas variáveis", path: ["date"] },
    );

type Form = z.infer<typeof schema>;

export function FormExpenses() {
    const {
        handleSubmit,
        register,
        setValue,
        watch,
        formState: { isValid, errors },
    } = useForm<Form>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const type = watch("type");

    const isTypeFixed = type === 'fixed';
    const isTypeVariable = type === 'variable';

    function handleSaveOrUpdateExpense(data: Form) {
        console.log(data);
    }

    function handlePressPrice(event: KeyboardEvent<HTMLInputElement>) {
        if (event.altKey || event.ctrlKey || event.metaKey || keysIgnores.includes(event.key)) return;

        !/[0-9\.,]/.test(event.key) && event.preventDefault();
    }

    function handleFormatPrice(event: FocusEvent<HTMLInputElement>) {
        if (!event.target.value) return;

        const price = formatPriceToNumber(event.target.value);

        if (isNaN(price)) {
            event.target.value = "";
            setValue("price", "");

            return;
        }

        const formattedPrice = formatPrice(price);
        event.target.value = formattedPrice;
        setValue("price", formattedPrice);
    }

    return (
        <div className={formExpensesClass}>
            <form className="w-full" onSubmit={handleSubmit(handleSaveOrUpdateExpense)}>
                <FormGroup className="w-full mb-3" name="name" text="Nome" required>
                    <Input placeholder="Ex: Compras" {...register("name")} />

                    <FormError text={errors.name?.message ?? ""} />
                </FormGroup>

                <FormGroup className="w-full mb-3" name="price" text="Preço" required>
                    <Input
                        placeholder="Ex: R$ 100,00"
                        {...register("price")}
                        onKeyDown={handlePressPrice}
                        onBlur={handleFormatPrice}
                    />

                    <FormError text={errors.price?.message ?? ""} />
                </FormGroup>

                <FormGroup className="w-full mb-3" name="category" text="Categoria" required>
                    <Autocomplete />

                    <FormError text={errors.category?.message ?? ""} />
                </FormGroup>

                <FormGroup className="w-full mb-3" name="type" text="Tipo" required>
                    <Select defaultValue="" {...register("type")}>
                        <option value="" disabled selected>Selecione um tipo</option>

                        {types.map(({ name, value }) => (
                            <option key={value} value={value}>
                                {name}
                            </option>
                        ))}
                    </Select>

                    <FormError text={errors.type?.message ?? ""} />
                </FormGroup>


                {
                    isTypeFixed && (
                        <FormGroup className="w-full mb-3" name="period" text="Período" required>
                            <Select defaultValue="" {...register("period")}>
                                <option value="" disabled selected>Selecione um período</option>

                                {
                                    periods.map(({ name, value }) => (
                                        <option key={value} value={value}>
                                            {name}
                                        </option>
                                    ))
                                }
                            </Select>

                            <FormError text={errors.period?.message ?? ""} />
                        </FormGroup>
                    )
                }

                {
                    isTypeVariable && (
                        <FormGroup className="w-full mb-3" name="date" text="Data" required>
                            <Input type="date" {...register("date")} />

                            <FormError text={errors.date?.message?.toString() ?? ""} />
                        </FormGroup>
                    )
                }

                <FormGroup className="w-full mb-3" name="observation" text="Observação">
                    <Textarea placeholder="Ex: Compras no mercado" {...register("observation")} />

                    <FormError text={errors.observation?.message ?? ""} />
                </FormGroup>

                <div className="grid w-full mt-5">
                    <Button className="py-3" type="submit" disabled={!isValid}>
                        Adicionar
                    </Button>
                </div>
            </form>
        </div>
    );
}
