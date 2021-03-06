import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className='bg-red-700'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex '>
          <NavLink
            to='/'
            exact
            className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest'
            activeClassName='text-white'
          >
            Adam
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-600'
          >
            Posts
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-600'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-600'
          >
            About
          </NavLink>
        </nav>
        <div></div>
      </div>
    </header>
  );
}
