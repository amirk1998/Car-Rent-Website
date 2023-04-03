import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopularCars } from '../../../Data/PopularCars';
import PickUpCar from '../PickUpCar/PickUpCar';
import DropOffCar from '../DropOffCar/DropOffCar';
import PopularCarList from '../PopularCars/PopularCarList/PopularCarList';
import SuggestCarList from '../SuggestedCars/SuggestCarList/SuggestCarList';
import { HiArrowsUpDown, HiArrowsRightLeft } from 'react-icons/hi2';

const HomeComponent = () => {
  const [isReverse, setIsReverse] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const windowWidth = window.innerWidth;

  let navigate = useNavigate();

  const maxItems = PopularCars.length;

  // const categories = [
  //   { id: 1, name: 'Category 1' },
  //   { id: 2, name: 'Category 2' },
  //   { id: 3, name: 'Category 3' },
  // ];

  // const [windowSize, setWindowSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   }
  //   window.addEventListener('resize', handleResize);
  //   handleResize();
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // console.log(windowSize);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const handleReverse = () => {
    setIsReverse(!isReverse);
  };

  const viewHandler = () => {
    navigate('/popular-cars');
  };

  return (
    <div className='w-full'>
      <div className='px-6 w-full md:px-16'>
        {/* Ads */}
        <div className='w-full bg-info-500 h-[232px] rounded-xl pt-4'>
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
        <div className='mt-8 flex flex-col md:flex-row md:justify-evenly items-center justify-center w-full'>
          {isReverse ? (
            <>
              <div className='z-10 w-full md:w-1/2 md:z-0'>
                <DropOffCar />
              </div>

              <div className='flex items-center justify-center'>
                <button
                  onClick={() => handleReverse()}
                  className='w-[60px] h-[60px] bg-primary-500 hover:bg-primary-700 rounded-xl flex items-center justify-center '
                >
                  <HiArrowsUpDown className='w-6 h-6 text-primary-000 md:hidden' />
                  <HiArrowsRightLeft className='hidden w-6 h-6 text-primary-000 md:flex' />
                </button>
              </div>
              <div className='w-full md:w-1/2'>
                <PickUpCar />
              </div>
            </>
          ) : (
            <>
              <div className='z-10 w-full md:w-1/2 md:z-0'>
                <PickUpCar />
              </div>
              <div className='flex items-center justify-center'>
                <button
                  onClick={() => handleReverse()}
                  className='w-[60px] h-[60px] bg-primary-500 rounded-xl flex items-center justify-center '
                >
                  <HiArrowsUpDown className='w-6 h-6 text-primary-000 md:hidden' />
                  <HiArrowsRightLeft className='hidden w-6 h-6 text-primary-000 md:flex' />
                </button>
              </div>
              <div className='w-full md:w-1/2'>
                <DropOffCar />
              </div>
            </>
          )}
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
          {windowWidth > 768 ? (
            <PopularCarList numberOfItems={4} />
          ) : (
            <PopularCarList numberOfItems={maxItems} />
          )}
        </div>
        {/* Recommendation Cars */}
        <div className='flex flex-col mt-8 gap-y-5 w-full'>
          <p className='text-secondary-300 font-semibold text-sm'>
            Recommendation Cars
          </p>
          <SuggestCarList />
          {/*  Button Show More Cars */}
          <div className='flex items-center justify-end mt-7 w-full'>
            <button className='bg-primary-500 hover:bg-primary-700 text-primary-000 w-32 h-9 font-semibold text-xs px-4 py-2 rounded-lg md:mr-[300px] lg:mr-[350px]'>
              Show More Cars
            </button>
            <p className='font-bold text-secondary-300 text-sm flex items-center justify-center w-36'>
              120 Car
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
