import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='border-zinc-200 sticky shadow-lg inset-x-0 top-6 z-30 mx-16 bg-primary rounded-2xl text-white transition-all'>
      <div className='max-w-7xl px-12 py-5 mx-auto flex items-center justify-between'>
        <Link to='/' className='flex items-center text-zinc-800 gap-2'>
          <div className='w-20 aspect-auto'>
            <img
              src='/logo.png'
              className='w-full h-full'
              alt='Awale Store Logo'
            />
          </div>
        </Link>
        <nav className='flex items-center gap-6'>
          <ul className='flex items-center gap-6'>
            <li>
              <Link className='text-tremor-default' to='/'>
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link className='text-tremor-default' to='/sessions'>
                SESSIONS
              </Link>
            </li>
            <li>
              <Link className='text-tremor-default' to='/'>
                ACTUALITES
              </Link>
            </li>
            <li>
              <Link className='text-tremor-default' to='/'>
                A LA UNE
              </Link>
            </li>
            <li>
              <Link className='text-tremor-default' to='/'>
                ADRESSER UNE PREOCCUPATION
              </Link>
            </li>
            <li>
              <Link className='text-tremor-default' to='/'>
                FAIRE UNE SUGGESTIONS
              </Link>
            </li>
            {/* <li>
              <Link to='/#features'>Features</Link>
            </li> */}
          </ul>
        </nav>
        <div className='flex items-center gap-4'>
          <Link to='/'>
            <BiLogoFacebookSquare size={25} />
          </Link>
          <Link to='/'>
            <BiLogoTwitter size={25} />
          </Link>
          <Link to='/'>
            <BiLogoLinkedinSquare size={25} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
