/* --- main --- */
import { FocusEvent, KeyboardEvent } from "react";

/* --- libs --- */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

/* --- utils --- */
import { formatPrice } from "@utils/formatPrice";

/* --- components --- */
import { Button } from "@components/atoms/Button";
import { FormGroup } from "@components/molecules/FormGroup";
import { FormError } from "@components/atoms/FormError";
import { Input } from "@components/atoms/Input";
import { Textarea } from "@components/atoms/Textarea";

/* --- styles --- */
import { formExpensesClass } from "./styles";

const keysIgnores = ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Backspace"];
const schema = z.object({
    name: z.string().nonempty({ message: "Preencha o campo nome" }),
    price: z
        .number({
            invalid_type_error: "O campo valor precisa ser um número",
            required_error: "Preencha o campo valor",
        })
        .min(1, { message: "O campo valor precisa ser maior que zero" }),
    observation: z
        .string()
        .refine((value) => !value || value && value.length > 8, {
            message: "O campo observação precisa ter pelo menos 8 caracteres",
        })
        .optional(),
    date: z
        .any()
        .refine((value) => value, { message: "Selecione/Digite uma data" })
        .refine((value) => dayjs(value, "YYYY-MM-DD", true).isValid(), { message: "Data inválida" }),
});

type Form = z.infer<typeof schema>;

export function FormExpenses() {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { isValid, errors },
    } = useForm<Form>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    function handleSaveOrUpdateExpense(data: Form) {
        console.log(data);
    }

    function handlePressPrice(event: KeyboardEvent<HTMLInputElement>) {
        console.log(event.key);
        if (event.altKey || event.ctrlKey || event.metaKey || keysIgnores.includes(event.key)) return;

        !/[0-9\.,]/.test(event.key) && event.preventDefault();
    }

    function handleFormatPrice(event: FocusEvent<HTMLInputElement>) {
        const price = event.target.value.replace(/[.]+/g, "").replace(/[,]/, ".");

        if (!price || isNaN(Number(price))) {
            event.target.value = "";
            setValue("price", 0);

            return;
        }

        event.target.value = formatPrice(price);
        setValue("price", Number(price.replace(/[^\d]/, "")));
    }

    return (
        <div className={formExpensesClass}>
            <form className="w-full" onSubmit={handleSubmit(handleSaveOrUpdateExpense)}>
                <FormGroup className="w-full mb-3" name="name" text="Nome" required>
                    <Input placeholder="Ex: Compras" {...register("name")} />
                </FormGroup>
                <FormError text={errors.name?.message ?? ""} />

                <FormGroup className="w-full mb-3" name="price" text="Preço" required>
                    <Input
                        placeholder="Ex: R$ 100,00"
                        onKeyDown={handlePressPrice}
                        onBlur={handleFormatPrice}
                    />
                </FormGroup>
                <FormError text={errors.price?.message ?? ""} />

                <FormGroup className="w-full mb-3" name="observation" text="Observação">
                    <Textarea placeholder="Ex: Compras no mercado" {...register("observation")} />
                </FormGroup>
                <FormError text={errors.observation?.message ?? ""} />

                <FormGroup className="w-full mb-3" name="date" text="Data" required>
                    <Input type="date" {...register("date")} />
                </FormGroup>
                <FormError text={errors.date?.message?.toString() ?? ""} />

                <div className="grid w-full mt-5">
                    <Button className="py-3" type="submit" disabled={!isValid}>
                        Adicionar
                    </Button>
                </div>
            </form>
        </div>
    );
}
