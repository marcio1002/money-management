/* --- main --- */
import { ChangeEvent, useRef, useState } from "react";

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
import { FaImages } from "react-icons/fa6";

/* --- styles --- */
import { formCategoryClass, infoFileImageClass, boxImagePreviewClass, imagePreviewClass } from "./styles";

const images_types = ["image/png", "image/jpeg", "image/jpg"];
/**
 * 5MB
 */
const max_image_size = 5 * 1024 * 1024;

const schema = z.object({
    name: z.string().nonempty({ message: "Preencha o campo nome" }),
    description: z.string().nonempty({ message: "Preencha o campo descrição" }),
    image: z
        .any()
        .refine(file => file, { message: "Selecione uma imagem" })
        .refine((file) => file instanceof File, { message: "Arquivo inválido" })
        .refine((file) => file instanceof File && images_types.includes(file.type), {
            message: "O formato do arquivo é inválido",
        })
        .refine((file) => file instanceof File && file.size <= max_image_size, {
            message: "O tamanho do arquivo excede o limite de 5MB",
        }),
});

type Form = z.infer<typeof schema>;

export function FormCategory() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const {
        handleSubmit,
        register,
        setValue,
        formState: { isValid, errors },
    } = useForm<Form>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    function handleSaveOrUpdateCategory(data: Form) {
        console.log(data);
    }

    function handleAddImage(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;

        if (!files || files?.length === 0) return;

        const file = files.item(0) as File;

        setValue("image", file, { shouldValidate: true, shouldDirty: true });
        setImagePreview(URL.createObjectURL(file));
    }

    return (
        <div className={formCategoryClass}>
            <form className="w-full" onSubmit={handleSubmit(handleSaveOrUpdateCategory)}>
                <FormGroup className="w-full mb-3" name="name" text="Nome" required>
                    <Input {...register("name")} placeholder="Nome da categoria" />

                    <FormError text={errors.name?.message ?? ""} />
                </FormGroup>

                <FormGroup className="w-full mb-3" name="description" text="Descrição" required>
                    <Textarea
                        {...register("description")}
                        placeholder="Descreva informações sobre a categoria"
                    />

                    <FormError text={errors.description?.message ?? ""} />
                </FormGroup>

                <FormGroup className="w-full mb-3" name="image" text="Imagem" required>
                    {
                        !imagePreview && (
                            <Button
                                className="text-slate-800 font-bold px-5 mt-2"
                                type="button"
                                onClick={() => inputFileRef.current?.click()}
                            >
                                Escolher imagem
                                <FaImages className="ms-1 text-lg align-middle" />
                            </Button>
                        )
                    }

                    {
                        imagePreview && (
                            <div
                                className={boxImagePreviewClass}
                                onClick={() => inputFileRef.current?.click()}
                            >
                                <img
                                    className={imagePreviewClass}
                                    src={imagePreview}
                                    alt="Imagem selecionada pelo usuário"
                                />
                            </div>
                        )
                    }

                    <Input
                        className="hidden"
                        type="file"
                        placeholder="Imagem da categoria"
                        accept={images_types.join(",")}
                        ref={inputFileRef}
                        onChange={handleAddImage}
                    />

                    <span className={infoFileImageClass}>
                        A imagem deve ser 250x250px ou 520x520px
                    </span>

                    <FormError text={(errors.image?.message as string) ?? ""} />
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
