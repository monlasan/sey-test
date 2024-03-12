import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (
    <section className='-mt-6'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className='h-[80vh] relative mx-6'>
            <img
              src='/section.jpg'
              className='w-full h-full rounded-2xl object-cover contrast-80 brightness-50'
              alt='Image sey le akouma'
            />
            <div className='absolute inset-0 flex flex-col justify-center items-start px-8 max-w-6xl mx-auto'>
              <span className='bg-primary text-white rounded-2xl px-4 py-3 text-sm'>
                20 Février 2024 | 06:47
              </span>
              <h2 className='text-white text-4xl pt-6 font-semibold'>
                L'ESSENTIEL A SAVOIR SUR LE DEVELOPPEMENT DU NUMERIQUE DU TCHAD
              </h2>
              <h3 className='text-white text-1xl pt-2 font-semibold'>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[80vh] relative mx-6'>
            <img
              src='/picture2.jpg'
              className='w-full h-full rounded-2xl object-cover contrast-80 brightness-50'
              alt='Image sey le akouma'
            />
            <div className='absolute inset-0 flex flex-col justify-center items-start px-8 max-w-6xl mx-auto'>
              <span className='bg-primary text-white rounded-2xl px-4 py-3 text-sm'>
                20 Février 2024 | 06:47
              </span>
              <h2 className='text-white text-4xl pt-6 font-semibold'>
                L'ESSENTIEL A SAVOIR SUR LE DEVELOPPEMENT DU NUMERIQUE DU TCHAD
              </h2>
              <h3 className='text-white text-1xl pt-2 font-semibold'>
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
        </SwiperSlide>
      </Swiper>
      {/*  <div>
        <h2>RECHERCHER</h2>
        <div className="flex">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div> */}
    </section>
  );
};

export default Herosection;
