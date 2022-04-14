import React from 'react';
import image from '../pexels-yousef-11619096.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Home page image of a car in water with a red moon. '
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold leading-none lg:leading-snug home-name'>
          Yo, It's Adam.{' '}
        </h1>
      </section>
    </main>
  );
}
