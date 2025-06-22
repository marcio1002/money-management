
/* --- utils --- */
import { css } from '@utils/css';

/* --- styles --- */
import { autocompleteClass, inputClass, listClass, listItemClass } from './styles';

/* --- types --- */
import { AutocompleteProps } from './types';

export function Autocomplete({ }: AutocompleteProps) {
    return (
        <div className={css(autocompleteClass)}>
            <input
                type="text"
                className={css(inputClass)}
            />

            <ul className={css(listClass)}>
                <li className={css(listItemClass)}>Sugestão 1</li>
                <li className={css(listItemClass)}>Sugestão 2</li>
                <li className={css(listItemClass)}>Sugestão 3</li>
                <li className={css(listItemClass)}>Sugestão 4</li>
                <li className={css(listItemClass)}>Sugestão 5</li>
            </ul>
        </div>
    )
}