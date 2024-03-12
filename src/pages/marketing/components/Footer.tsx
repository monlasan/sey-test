import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-primary mt-20 mx-16 mb-6 rounded-2xl text-white pb-12 pt-4 border-zinc-200'>
      <div className='max-w-6xl px-4 py-12 mx-auto flex items-center justify-center flex-col gap-2'>
        <Link to='/' className='flex items-center text-zinc-800 gap-2'>
          <div className='w-96 aspect-auto'>
            <img
              src='/patronyme.png'
              className='w-full h-full'
              alt='Patronyme DCOM'
            />
          </div>
        </Link>
        <nav className='flex items-center gap-6'>
          <ul className='flex items-center gap-6'>
            <li>
              <Link className='text-tremor-title' to='/'>
                Présendence du tchad
              </Link>
            </li>
            <div className='bg-white w-1 h-1 rounded-full'></div>
            <li>
              <Link className='text-tremor-title' to='/'>
                Tchad révélé
              </Link>
            </li>
            <div className='bg-white w-1 h-1 rounded-full'></div>
            <li>
              <Link className='text-tremor-title' to='/'>
                Sécrétariat Générale du Tchad
              </Link>
            </li>
            <div className='bg-white w-1 h-1 rounded-full'></div>
            <li>
              <Link className='text-tremor-title' to='/'>
                Investir au tchad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='text-center'>
        © GOUVERNEMENT DE LA RÉPUBLIQUE DU TCHAD - {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
