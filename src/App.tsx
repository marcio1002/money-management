/* --- libs --- */
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

/* --- components --- */
import { Sidebar } from '@components/organisms/Sidebar';
import { ButtonToggleTheme } from '@components/atoms/ButtonToggleTheme';

/* --- providers --- */
import { ThemeProvider } from 'providers/ThemeProvider';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <div className='w-full flex'>
          <Sidebar />

          <div className='grow'>
            <Outlet />
          </div>

          <ButtonToggleTheme />
        </div>
      </ThemeProvider>

      <ToastContainer position='top-right' />
    </>
  )
}
