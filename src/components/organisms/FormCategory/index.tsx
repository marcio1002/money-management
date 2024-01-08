/* --- libs --- */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/* --- components --- */
import { Button } from "@components/atoms/Button";
import { FormGroup } from "@components/molecules/FormGroup";
import { FormError } from "@components/atoms/FormError";
import { Input } from "@components/atoms/Input";
import { Textarea } from "@components/atoms/Textarea";

/* --- styles --- */
import { formCategoryClass } from "./styles";

const images_types = ["image/png", "image/jpeg", "image/jpg", "image/svg", "image/gif"];

const schema = z
    .object({
        name: z.string({ required_error: "Preencha o campo nome" }),
        description: z.string({ required_error: "Preencha o campo descrição" }),
        image: z.any({
            required_error: "Selecione uma imagem",
            invalid_type_error: "O formato do arquivo é inválido",
        }),
    })
    .required();

type CategorySchema = z.infer<typeof schema>;

export function FormCategory() {
    const {
        handleSubmit,
        register,
        formState: { isValid, errors },
    } = useForm<CategorySchema>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    function handleAddCategory(data: CategorySchema) {
        console.log(data);
    }

    return (
        <div className={formCategoryClass}>
            <form className="w-fit" onSubmit={handleSubmit(handleAddCategory)}>
                <FormGroup id="name" text="Nome" placeholder="Nome da categoria" className="w-12/12 mb-3">
                    <Input id="name" {...register("name")} />
                </FormGroup>
                <FormError isError={!!errors.name} text={errors.name?.message ?? ""} />

                <FormGroup
                    id="description"
                    text="Descrição"
                    placeholder="Descreva informações sobre a categoria"
                    className="w-12/12 mb-3"
                >
                    <Textarea id="description" {...register("description")} />
                </FormGroup>
                <FormError isError={!!errors.description} text={errors.description?.message ?? ""} />

                <FormGroup id="image" text="Imagem" placeholder="Imagem da categoria" className="w-12/12 mb-3">
                    <Input id="image" type="file" accept={images_types.join(",")} {...register("image")} />
                </FormGroup>
                <FormError isError={!!errors.image} text={errors.image?.message as string ?? ""} />

                <div className="grid w-12/12 lg:w-4/12 xxl:w-7/12">
                    <Button type="submit" disabled={!isValid}>
                        Adicionar
                    </Button>
                </div>
            </form>
        </div>
    );
}
