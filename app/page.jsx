import ThemeToggler from '@/components/ThemeToggler';
import React from 'react';

const page = () => {
  return (
    <>
      <div className='flex justify-end p-5'>
        <ThemeToggler />
      </div>
      <div className=' p-4 text-center  '>
        <h1 className=' text-4xl font-bold lg:text-6xl'>Hello Next.JS</h1>
        <p className='mx-auto mt-5 max-w-[600px] text-lg leading-8'>
          Next.JS, Shadcn/ui, Tailwind, ESLint and Prettier Boiler plate code
          with Dark mode Toggler. Make sure you have installed &apos;Prettier -
          Code formatter&apos; and &apos;ESLint&apos; in your VS-Code.
        </p>
      </div>
    </>
  );
};

export default page;
