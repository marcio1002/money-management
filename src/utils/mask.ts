const simbolsMask = ["#", "?"];

/**
 * Helper para aplicar mascaras nos inputs de texto
 *
 * \# - Valores apenas numéricos
 *
 * ? - Valores apenas letras a-zA-Z
 * @param  value
 * @param mask
 * @returns
 *
 * @example
 * <input
 *  type="text"
 *  placeholder="00/00/0000"
 *  value={date}
 *  onChange={e => handleChange(mask(e.target.value, '##/##/####'))}
 * />
 *
 * <input
 *  type="text"
 *  placeholder="f20"
 *  value={date}
 *  onChange={e => handleChange(mask(e.target.value, '?##'))}
 * />
 */
export function mask(value: string, mask: string): string {
    const split_value = value.split("");
    const split_mask = mask.split("");

    return split_value.slice(0, split_mask.length).reduce((masked, letter, indice) => {
        const letter_mask = split_mask[indice];

        if (letter_mask === "#" && /\d/.test(letter)) return masked.concat(letter);

        if (letter_mask === "?" && /\w/i.test(letter)) return masked.concat(letter);

        if (
            !simbolsMask.includes(letter_mask) &&
            ((masked.length > 0 && indice > 0) || (masked.length === 0 && indice === 0))
        ) {
            masked = masked.concat(letter_mask);

            const letter_mask_next = split_mask[indice + 1];

            if (letter_mask_next === "#" && /\d/.test(letter)) return masked.concat(letter);

            if (letter_mask_next === "?" && /\w/.test(letter)) return masked.concat(letter);

            return masked;
        }

        return masked;
    }, "");
}