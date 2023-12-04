/* --- libs --- */
import { IoAdd } from 'react-icons/io5';

/* --- components --- */
import { Button } from '@components/atoms/Button';

export function SidebarBottom() {
    return (
        <div className='w-full flex justify-center py-3'>
            <Button className='align-middle'>
                Add Gasto

                <IoAdd className='text-xl' />
            </Button>
        </div>
    );
}