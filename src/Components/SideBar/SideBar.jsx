import React, { useState } from 'react';

const SideBar = ({ categories, isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className='absolute top-4 right-4' onClick={toggleSidebar}>
        <svg
          className='h-6 w-6'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          {isOpen ? (
            <path d='M6 18L18 6M6 6l12 12' />
          ) : (
            <path d='M3 12h18M3 6h18M3 18h18' />
          )}
        </svg>
      </button>
      <ul className='mt-8'>
        {categories.map((category) => (
          <li
            key={category.id}
            className='py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer'
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
