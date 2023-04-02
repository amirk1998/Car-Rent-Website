const Header = () => {
  return (
    <>
      <header className='flex flex-col w-full bg-primary-000 mt-8 h-44 md:h-32 px-6'>
        {/* Brand and Profile Picture */}
        <div className='flex items-center justify-between w-full'>
          <p className='text-primary-500 font-bold uppercase text-2xl md:text-[32px]'>
            Morent
          </p>
          {/* Search Input ionDesktop */}
          <div className='hidden md:relative md:flex md:items-center w-full max-w-md mx-auto ml-16 xl:mr-24 md:mr-12 sm:mr-2'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
              >
                <path
                  stroke='#596780'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2'
                />
              </svg>
            </div>
            <input
              type='text'
              className='block md:w-full h-11 py-2 pr-10 pl-12 text-sm text-secondary-500 placeholder-secondary-400 rounded-full focus:outline-none focus:bg-white border border-secondary-200'
              placeholder='Search something here'
            />
            <button className='absolute inset-y-0 right-0 flex items-center pr-3'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22 6.5H16'
                  stroke='#596780'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6 6.5H2'
                  stroke='#596780'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z'
                  stroke='#596780'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22 17.5H18'
                  stroke='#596780'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8 17.5H2'
                  stroke='#596780'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z'
                  stroke='#596780'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          {/* Profile Photo */}
          <div className='w-6 h-6 md:hidden rounded-full flex items-center justify-between'>
            <img className='' src={'/images/profile-1.png'} alt='user' />
          </div>
          {/* Icons & Profile Photo in Desktop */}
          <div className='hidden md:flex items-center justify-between gap-x-5'>
            {/* Setting Icon */}
            <div className='w-11 h-11 hidden md:flex md:items-center md:justify-center border border-secondary-200 rounded-full '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
              >
                <path
                  fill='#596780'
                  d='M20.1 9.22c-1.81 0-2.55-1.28-1.65-2.85.52-.91.21-2.07-.7-2.59l-1.73-.99c-.79-.47-1.81-.19-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.641 1.641 0 0 0-2.26-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.85-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85-.52.91-.21 2.07.7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76a1.92 1.92 0 0 0-1.91-1.9ZM12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z'
                />
              </svg>
            </div>
            {/* Notification */}
            <div className='w-11 h-11 hidden md:flex md:items-center md:justify-center border border-secondary-200 rounded-full '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
              >
                <path
                  fill='#596780'
                  d='m19.34 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82a5.91 5.91 0 0 0-3.37-5.33A2.926 2.926 0 0 0 11.99 2c-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z'
                />
              </svg>
            </div>
            {/* Like */}
            <div className='w-11 h-11 hidden md:flex md:items-center md:justify-center border border-secondary-200 rounded-full '>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z'
                  fill='#596780'
                />
              </svg>
            </div>
            {/* Profile Photo */}
            <div className='w-6 h-6 md:w-11 md:h-11 rounded-full flex items-center justify-between'>
              <img className='' src={'/images/profile-1.png'} alt='user' />
            </div>
          </div>
        </div>
        {/* Search Bar in Mobile */}
        <div className='flex items-center justify-between mt-8 md:hidden'>
          <div className='relative'>
            <div className='absolute inset-y-0 flex items-center left-3 top-3 w-6 h-6 text-secondary-200 '>
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2'
                />
              </svg>
            </div>
            <input
              type='text'
              className='block h-12 mr-4 border border-secondary-200 rounded-xl w-64 sm:w-[384px] md:w-[520px] placeholder-secondary-200 placeholder:text-sm pl-12 text-sm outline-none focus:outline-none focus:border-2 focus:border-primary-500 ring-0 focus:ring-0'
              placeholder='Search something here'
            />
          </div>
          {/* SideBar Button */}
          <button className='border rounded-xl border-secondary-200 text-secondary-200 w-12 h-12 flex items-center justify-center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22 7.25H16C15.59 7.25 15.25 6.91 15.25 6.5C15.25 6.09 15.59 5.75 16 5.75H22C22.41 5.75 22.75 6.09 22.75 6.5C22.75 6.91 22.41 7.25 22 7.25Z'
                fill='#c3d4e9'
              />
              <path
                d='M6 7.25H2C1.59 7.25 1.25 6.91 1.25 6.5C1.25 6.09 1.59 5.75 2 5.75H6C6.41 5.75 6.75 6.09 6.75 6.5C6.75 6.91 6.41 7.25 6 7.25Z'
                fill='#c3d4e9'
              />
              <path
                d='M10 10.75C7.66 10.75 5.75 8.84 5.75 6.5C5.75 4.16 7.66 2.25 10 2.25C12.34 2.25 14.25 4.16 14.25 6.5C14.25 8.84 12.34 10.75 10 10.75ZM10 3.75C8.48 3.75 7.25 4.98 7.25 6.5C7.25 8.02 8.48 9.25 10 9.25C11.52 9.25 12.75 8.02 12.75 6.5C12.75 4.98 11.52 3.75 10 3.75Z'
                fill='#c3d4e9'
              />
              <path
                d='M22 18.25H18C17.59 18.25 17.25 17.91 17.25 17.5C17.25 17.09 17.59 16.75 18 16.75H22C22.41 16.75 22.75 17.09 22.75 17.5C22.75 17.91 22.41 18.25 22 18.25Z'
                fill='#c3d4e9'
              />
              <path
                d='M8 18.25H2C1.59 18.25 1.25 17.91 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75H8C8.41 16.75 8.75 17.09 8.75 17.5C8.75 17.91 8.41 18.25 8 18.25Z'
                fill='#c3d4e9'
              />
              <path
                d='M14 21.75C11.66 21.75 9.75 19.84 9.75 17.5C9.75 15.16 11.66 13.25 14 13.25C16.34 13.25 18.25 15.16 18.25 17.5C18.25 19.84 16.34 21.75 14 21.75ZM14 14.75C12.48 14.75 11.25 15.98 11.25 17.5C11.25 19.02 12.48 20.25 14 20.25C15.52 20.25 16.75 19.02 16.75 17.5C16.75 15.98 15.52 14.75 14 14.75Z'
                fill='#c3d4e9'
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
