import { useState } from 'react';

const PopularCarCard = () => {
  const [isLike, setIsLike] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className='w-60 h-72 bg-primary-000 rounded-xl flex flex-col p-4 '>
      {/* Title , Type and Like */}
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center justify-between'>
          <p className='text-base font-semibold text-secondary-500'>
            Koenigsegg
          </p>
          <button onClick={handleLike}>
            {isLike ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 stroke-like-btn fill-like-btn'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 stroke-secondary-300 hover:stroke-secondary-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            )}
          </button>
        </div>
        <p className='text-xs font-medium text-secondary-300'>Sport</p>
      </div>
      {/* Car Image */}
      <div className='mt-8 w-[180px] h-14 ml-[14px]'>
        <img src={'/images/PopularCars/Corolla.png'} alt='carIMG' />
      </div>
      {/* Spesification */}
      <div className='flex items-center justify-between mt-11 '>
        {/* Capacity */}
        <div className='flex items-center gap-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='m13.032 5.442-1.167-.583a.441.441 0 0 0-.59.193.434.434 0 0 0 .193.589l.928.46v2.795l-2.188.006V2.917c0-1.167-.781-1.75-1.75-1.75H3.792c-.969 0-1.75.583-1.75 1.75v9.479h-.875a.44.44 0 0 0-.438.437c0 .24.199.438.438.438h9.916a.44.44 0 0 0 .438-.438.44.44 0 0 0-.438-.437h-.875v-2.62l2.625-.005a.437.437 0 0 0 .438-.438v-3.5a.443.443 0 0 0-.24-.39ZM3.5 4.02c0-.81.496-1.102 1.103-1.102h3.05c.601 0 1.097.291 1.097 1.102v.718c0 .805-.496 1.096-1.102 1.096H4.603c-.607 0-1.103-.291-1.103-1.102v-.712Zm.292 3.127h1.75a.44.44 0 0 1 .437.437.44.44 0 0 1-.437.438h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437Z'
            />
          </svg>
          <p className='text-secondary-300 font-medium text-xs'>
            90 <span>L</span>
          </p>
        </div>
        {/* Drive */}
        <div className='flex items-center gap-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='M7 1C3.688 1 1 3.688 1 7s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6Z'
            />
            <rect width='10' height='10' x='2' y='2' fill='#fff' rx='5' />
            <path
              fill='#90A3BF'
              d='M7 3C4.792 3 3 4.792 3 7s1.792 4 4 4 4-1.792 4-4-1.788-4-4-4Z'
            />
            <path fill='#90A3BF' d='M8 6h4v2H8zM2 6h4v2H2zM6 8h2v4H6z' />
            <rect width='6' height='6' x='4' y='4' fill='#fff' rx='3' />
          </svg>
          <p className='text-secondary-300 font-medium text-xs'>Manual</p>
        </div>
        {/* Space */}
        <div className='flex items-center gap-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='M5.25 1.167a2.773 2.773 0 0 0-2.77 2.77c0 1.5 1.172 2.713 2.7 2.765a.47.47 0 0 1 .128 0H5.35a2.764 2.764 0 0 0 2.672-2.765 2.773 2.773 0 0 0-2.77-2.77ZM8.213 8.254c-1.627-1.085-4.281-1.085-5.92 0-.741.496-1.15 1.167-1.15 1.884 0 .718.409 1.383 1.144 1.873.816.548 1.89.822 2.963.822 1.073 0 2.147-.274 2.963-.822.735-.496 1.144-1.161 1.144-1.884-.006-.718-.409-1.383-1.144-1.873ZM11.66 4.282a2.088 2.088 0 0 1-1.825 2.257h-.029c-.035 0-.07 0-.1.012a2.093 2.093 0 0 1-1.475-.484 2.67 2.67 0 0 0 .875-2.217 2.707 2.707 0 0 0-.45-1.272 2.096 2.096 0 0 1 3.004 1.703Z'
            />
            <path
              fill='#90A3BF'
              d='M12.828 9.678c-.047.565-.409 1.055-1.015 1.388-.584.32-1.319.472-2.048.455.42-.38.665-.852.712-1.354.058-.723-.286-1.417-.974-1.971A4.815 4.815 0 0 0 8.16 7.46c1.29-.373 2.91-.123 3.908.682.537.432.811.975.759 1.535Z'
            />
          </svg>
          <p className='text-secondary-300 font-medium text-xs'>
            4 <span>People</span>
          </p>
        </div>
      </div>
      {/* Price and Button */}
      <div className='flex items-center justify-between mt-7 '>
        {isDiscount ? (
          <div className='flex flex-col'>
            {/* Off Price */}
            <p className='text-secondary-500 font-bold text-xs '>
              $ <span className='text-base xl:text-xl'>79</span>
              <span className='text-secondary-300 ml-1'>/day</span>
            </p>
            {/* Price */}
            <p className='text-secondary-300 font-bold text-xs line-through'>
              $ <span>89</span>
            </p>
          </div>
        ) : (
          <div className='flex flex-col'>
            {/* Price */}
            <p className='text-secondary-500 font-bold text-xs '>
              $ <span className='text-base xl:text-xl'>79</span>
              <span className='text-secondary-300 ml-1'>/day</span>
            </p>
          </div>
        )}

        <button className='bg-primary-500 hover:bg-primary-700 text-primary-000 text-xs font-semibold w-24 h-9 rounded-lg'>
          Rental Now
        </button>
      </div>
    </div>
  );
};

export default PopularCarCard;
