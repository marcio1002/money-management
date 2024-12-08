/* --- libs --- */
import dayjs from "dayjs";

/**
 * Remove acentos e caracteres especiais para verificação de igualdade ou pesquisa por palavra
 * @param value
 * @returns
 *
 * @example
 * const words =  ['Potência', 'Calculadora', 'Altura', 'Caminhão'];
 * const value_search = sanitizeString('potên');
 * const result = words.filter(word => sanitizeString(word).includes(value));
 */
export function sanitizeString(value: string): string {
    return value.trim().normalize("NFD").replace(/[\W]/g, "").toLowerCase();
}

/**
 * Helper para ordenar array com base no campo
 * @param field
 * @param optionsSorts
 * @returns
 *
 * @example [{name: 'Angel', age: 34}, {name: 'Beatriz', age: 24}].sort(sortedString('name'))
 */
export function sortedString<T = any>(field?: keyof T, optionsSorts: Intl.CollatorOptions = {}) {
    const locale = "pt-BR";

    optionsSorts = {
        ...optionsSorts,
        sensitivity: optionsSorts?.sensitivity ?? "variant",
    };

    if (!field) return Intl.Collator(locale, optionsSorts).compare as (a: T, b: T) => number;

    return (a: T, b: T): number =>
        (a[field as keyof T] as unknown as string)?.localeCompare(
            (b[field as keyof T] as unknown as string) ?? "",
            locale,
            optionsSorts
        );
}

/**
 * Helper para formatar data e hora com base no fuso horário
 * @param date
 * @param format
 * @returns
 *
 * @example
 * formatDatetime(new Date(), 'DD/MM/YYYY')
 * formatDatetime(new Date(), 'DD/MM/YYYY HH:mm:ss')
 */
export function formatDatetime(
    date: string | Date,
    format: string,
    timezone: string = "America/Sao_Paulo"
): string {
    return dayjs.tz(date, timezone).format(format);
}
