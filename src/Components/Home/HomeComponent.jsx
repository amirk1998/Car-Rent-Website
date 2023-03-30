import PickUpCar from '../PickUpCar/PickUpCar';
import { HiArrowsUpDown } from 'react-icons/hi2';
import DropOffCar from '../DropOffCar/DropOffCar';
import { useState } from 'react';
import PopularCarList from '../PopularCars/PopularCarList/PopularCarList';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const [isReverse, setIsReverse] = useState(false);

  let navigate = useNavigate();

  const handleReverse = () => {
    setIsReverse(!isReverse);
  };

  const viewHandler = () => {
    navigate('/popular-cars');
  };

  return (
    <div className='px-6'>
      <div className='flex items-center justify-between mt-8'>
        <div className='text-primary-500 font-bold uppercase'>Morent</div>
        <div className='w-6 h-6 rounded-full flex items-center justify-center'>
          <img src={'/images/profile-1.png'} alt='user' />
        </div>
      </div>
      {/* Search Input */}
      <div className='flex items-center justify-between mt-8'>
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
        <div className='border rounded-xl border-secondary-200 text-secondary-200 w-12 h-12 flex items-center justify-center'>
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
        </div>
      </div>

      {/* Ads */}
      <div className='w-full bg-info-500 h-[232px] mt-8 rounded-xl pt-4'>
        <div className='px-4 flex flex-col mb-4'>
          <p className='text-base text-primary-000 mb-4 font-semibold '>
            The Best Platform for Car Rental
          </p>
          <p className='text-sm font-medium text-primary-000 '>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className='mt-4 bg-primary-500 hover:bg-primary-700 text-primary-000 text-center font-semibold text-xs w-32 h-11 rounded-xl'>
            Rental Car
          </button>
        </div>
        <img
          className='ml-[54px] h-14 w-48 mb-1'
          src={'/images/Ads-Car-1.png'}
          alt='ads-car'
        />
      </div>
      {/* Pick-Up & Drop-Off */}
      <div className='mt-8 flex flex-col items-center justify-center '>
        {isReverse ? (
          <>
            <div className='z-10 w-full'>
              <DropOffCar />
            </div>

            <div className='flex items-center justify-center'>
              <button
                onClick={() => handleReverse()}
                className='w-[60px] h-[60px] bg-primary-500 hover:bg-primary-700 rounded-xl flex items-center justify-center '
              >
                <HiArrowsUpDown className='w-6 h-6 text-primary-000' />
              </button>
            </div>
            <PickUpCar />
          </>
        ) : (
          <>
            <div className='z-10 w-full'>
              <PickUpCar />
            </div>
            <div className='flex items-center justify-center'>
              <button
                onClick={() => handleReverse()}
                className='w-[60px] h-[60px] bg-primary-500 rounded-xl flex items-center justify-center '
              >
                <HiArrowsUpDown className='w-6 h-6 text-primary-000' />
              </button>
            </div>
            <DropOffCar />
          </>
        )}
        {/* <PickUpCar />
        <div className='flex items-center justify-center'>
          <button
            onClick={() => handleReverse()}
            className='w-[60px] h-[60px] bg-primary-500 rounded-xl flex items-center justify-center '
          >
            <HiArrowsUpDown className='w-6 h-6 text-primary-000' />
          </button>
        </div>
        <DropOffCar /> */}
      </div>
      {/* Popular Cars */}
      <div className='flex flex-col items-center mt-8 gap-y-5'>
        <div className='flex items-center justify-between w-full'>
          <p className='text-secondary-300 font-semibold text-sm'>
            Popular Cars
          </p>
          <button
            onClick={viewHandler}
            className='text-primary-500 hover:text-primary-700 font-semibold text-xs'
          >
            View All
          </button>
        </div>
        <PopularCarList />
      </div>
    </div>
  );
};

export default HomeComponent;
