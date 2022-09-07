import { Link } from '@shopify/hydrogen';
import NextLogo from '../svg-components/HydrogenLogo';

export default function Header() {
  return (
    <>
      <header className=' bg-teal-600 rounded-md p-4 flex items-center justify-between'>
        <div className='left flex justify-between gap-5'>
          <Link to='/'>
            <div className='flex text-2xl items-center font-bold gap-5'>
              <NextLogo />
              <span className='site-title text-slate-50'>Hydrogen </span>
            </div>
          </Link>
          <div className='nav'></div>
        </div>
        <div className='right'>
          <span className='login font-bold text-xl text-slate-50'>
            On the Server
          </span>
        </div>
      </header>
    </>
  );
}
