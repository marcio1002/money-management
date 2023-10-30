/* --- libs --- */
import { IoAdd } from 'react-icons/io5';

/* --- components --- */
import { Button } from '@components/atoms/Button';

/* --- styles --- */
import { iconClass } from './styles';

export function SidebarBottom() {
    return (
        <div className='w-full flex justify-center py-3'>
            <Button>
                <IoAdd className={iconClass} />

                Add Gasto
            </Button>
        </div>
    );
}