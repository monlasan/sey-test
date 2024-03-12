import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import LoginForm from './components/LoginForm';
import Footer from '../marketing/components/Footer';
import Header from '../marketing/components/Header';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      {/* <MaxWidthWrapper> */}
      <div className='flex-col items-center rounded-b-xl bg-background flex'>
        <div className='bg-zinc-800 w-full flex justify-center py-4'>
          <Link to='/' className='flex items-center text-zinc-800 gap-2'>
            <div className='w-full max-w-16 aspect-auto'>
              <img
                src='/logo.png'
                className='w-full h-full'
                alt='Patronyme DCOM'
              />
            </div>
          </Link>
        </div>
        <div className=' py-16 w-full flex items-center justify-center'>
          <LoginForm />
        </div>
      </div>
      <Footer />
      {/* </MaxWidthWrapper> */}
    </>
  );
};

export default LoginPage;
