import { Link } from 'react-router-dom';

const Alaune = () => {
  return (
    <section className='mx-6 px-12 py-16 mt-20'>
      <div className='relative'>
        <div className='border-t-2 border-black absolute inset-0'></div>
        <div className='border border-black w-0 h-[200px] mx-auto'></div>
      </div>
      <h2 className='text-center text-black rounded-2xl text-6xl py-16 font-sm'>
        Questions a la une
      </h2>
      <div className='grid lg:grid-cols-3 gap-12'>
        <div className='w-full border border-black rounded-2xl'>
          <div className='px-12 py-16'>
            <p className='text-black rounded-2xl text-1xl'>
              Je suis entrer en contact avec un des responsables de la SIPI pour
              dEnoncer un certain nombre de fais dans le cadre de la rEforme sur
              le soja encour au Benin pour dEnoncer un certain nombre de fais
              dans le cadre de la rEforme sur le soja encour au Benin...
              <Link className='text-sm font-semibold' to='/'>
                Voir plus
              </Link>
            </p>
            <h3 className='text-black text-1xl pt-4 font-semibold'>
              Boukar Michel
            </h3>
          </div>
        </div>
        <div className='w-full border border-black rounded-2xl'>
          <div className='px-12 py-16'>
            <p className='text-black rounded-2xl text-1xl'>
              Je suis entrer en contact avec un des responsables de la SIPI pour
              dEnoncer un certain nombre de fais dans le cadre de la rEforme sur
              le soja encour au Benin pour dEnoncer un certain nombre de fais
              dans le cadre de la rEforme sur le soja encour au Benin...
              <Link className='text-sm font-semibold' to='/'>
                Voir plus
              </Link>
            </p>
            <h3 className='text-black text-1xl pt-4 font-semibold'>
              Boukar Michel
            </h3>
          </div>
        </div>
        <div className='w-full border border-black rounded-2xl relative'>
          <div className='px-12 py-16'>
            <p className='text-black rounded-2xl text-1xl'>
              Je suis entrer en contact avec un des responsables de la SIPI pour
              dEnoncer un certain nombre de fais dans le cadre de la rEforme sur
              le soja encour au Benin pour dEnoncer un certain nombre de fais
              dans le cadre de la rEforme sur le soja encour au Benin...
              <Link className='text-sm font-semibold' to='/'>
                Voir plus
              </Link>
            </p>
            <h3 className='text-black text-1xl pt-4 font-semibold'>
              Boukar Michel
            </h3>
          </div>
          <img
            src='/svg/question-mak.svg'
            className=' absolute right-[80px] top-[290px] w-26 h-26'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Alaune;
