import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sessionslayout = () => {
  return (
    <section className='mx-6 px-12 py-16 mt-20 bg-primary rounded-2xl'>
      <div className='flex items-center justify-between'>
        <h2 className='text-white text-4xl font-semibold'>
          Les dernières sessions
        </h2>
        <Button variant='tertiary'>Voir toutes les sessions</Button>
      </div>
      <div className='grid lg:grid-cols-3 gap-12 pt-8'>
        <div className='w-full'>
          <div className='relative'>
            <img
              src='/picture2.jpg'
              className='w-full h-60 rounded-2xl contrast-80 brightness-50'
              alt='Image sey le akouma'
            />
            <span className='absolute top-[20px] left-[20px] bg-black text-white rounded-2xl px-4 py-2 text-sm'>
              22 questions
            </span>
          </div>
          <div className='py-6'>
            <p className='text-white rounded-2xl text-sm'>
              20 Février 2024 | 06:47
            </p>
            <h2 className='text-white text-2xl pt-3 font-semibold'>
              L'ESSENTIEL A SAVOIR SUR LE DEVELOPPEMENT DU NUMERIQUE DU TCHAD
              ...
            </h2>
            <div className='border border-border-100 w-full mt-3'></div>
            <h3 className='text-white text-1xl pt-4 font-semibold'>
              Boukar Michel
            </h3>
            <p className='text-white text-1xl pt-1'>
              Ministre des Télécommunications et de l'Economie Numérique
            </p>
            <Button variant='tertiary' className='mt-6'>
              Suivre
            </Button>
          </div>
        </div>
        <div className='w-full'>
          <div className='relative'>
            <img
              src='/picture2.jpg'
              className='w-full h-60 rounded-2xl contrast-80 brightness-50'
              alt='Image sey le akouma'
            />
            <span className='absolute top-[20px] left-[20px] bg-black text-white rounded-2xl px-4 py-2 text-sm'>
              22 questions
            </span>
          </div>
          <div className='py-6'>
            <p className='text-white rounded-2xl text-sm'>
              20 Février 2024 | 06:47
            </p>
            <h2 className='text-white text-2xl pt-3 font-semibold'>
              L'ESSENTIEL A SAVOIR SUR LE DEVELOPPEMENT DU NUMERIQUE DU TCHAD
              ...
            </h2>
            <div className='border border-border-100 w-full mt-3'></div>
            <h3 className='text-white text-1xl pt-4 font-semibold'>
              Boukar Michel
            </h3>
            <p className='text-white text-1xl pt-1'>
              Ministre des Télécommunications et de l'Economie Numérique
            </p>
            <Button variant='tertiary' className='mt-6'>
              Suivre
            </Button>
          </div>
        </div>
        <div className='w-full'>
          <div className='relative'>
            <img
              src='/picture2.jpg'
              className='w-full h-60 rounded-2xl contrast-80 brightness-50'
              alt='Image sey le akouma'
            />
            <span className='absolute top-[20px] left-[20px] bg-black text-white rounded-2xl px-4 py-2 text-sm'>
              22 questions
            </span>
          </div>
          <div className='py-6'>
            <p className='text-white rounded-2xl text-sm'>
              20 Février 2024 | 06:47
            </p>
            <h2 className='text-white text-2xl pt-3 font-semibold'>
              L'ESSENTIEL A SAVOIR SUR LE DEVELOPPEMENT DU NUMERIQUE DU TCHAD
              ...
            </h2>
            <div className='border border-border-100 w-full mt-3'></div>
            <h3 className='text-white text-1xl pt-4 font-semibold'>
              Boukar Michel
            </h3>
            <p className='text-white text-1xl pt-1'>
              Ministre des Télécommunications et de l'Economie Numérique
            </p>
            <Button variant='tertiary' className='mt-6'>
              Suivre
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sessionslayout;
