import { useState } from 'react';

const PopularCarCard = ({
  carName,
  type,
  space,
  capacity,
  isDiscount,
  price,
  offPrice,
  drive,
}) => {
  const [isLike, setIsLike] = useState(false);
  // const [isDiscount, setIsDiscount] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className='w-60 h-72 lg:w-[304px] lg:h-96 bg-primary-000 rounded-xl flex flex-col p-4 '>
      {/* Title , Type and Like */}
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center justify-between'>
          <p className='text-base lg:text-xl font-semibold text-secondary-500'>
            {carName}
          </p>
          {/* Like Button */}
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
        <p className='text-xs lg:text-sm font-medium text-secondary-300'>
          {type}
        </p>
      </div>
      {/* Car Image */}
      <div className='mt-8 w-[180px] h-14 ml-[14px] lg:mx-9 lg:mt-16 lg:w-52'>
        <img src={`/images/PopularCars/${carName}.png`} alt={carName} />
      </div>
      {/* Spesification */}
      <div className='flex items-center justify-between mt-11 lg:mt-[70px]'>
        {/* Capacity */}
        <div className='flex items-center gap-x-1 lg:gap-x-[6px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='lg:hidden'
            width='14'
            height='14'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='m13.032 5.442-1.167-.583a.441.441 0 0 0-.59.193.434.434 0 0 0 .193.589l.928.46v2.795l-2.188.006V2.917c0-1.167-.781-1.75-1.75-1.75H3.792c-.969 0-1.75.583-1.75 1.75v9.479h-.875a.44.44 0 0 0-.438.437c0 .24.199.438.438.438h9.916a.44.44 0 0 0 .438-.438.44.44 0 0 0-.438-.437h-.875v-2.62l2.625-.005a.437.437 0 0 0 .438-.438v-3.5a.443.443 0 0 0-.24-.39ZM3.5 4.02c0-.81.496-1.102 1.103-1.102h3.05c.601 0 1.097.291 1.097 1.102v.718c0 .805-.496 1.096-1.102 1.096H4.603c-.607 0-1.103-.291-1.103-1.102v-.712Zm.292 3.127h1.75a.44.44 0 0 1 .437.437.44.44 0 0 1-.437.438h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437Z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className='hidden lg:inline-block'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='m22.34 9.33-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 0 0-.41-.67ZM6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89Zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Z'
            />
          </svg>

          <p className='text-secondary-300 font-medium text-xs lg:text-sm'>
            {capacity} <span>L</span>
          </p>
        </div>
        {/* Drive */}
        <div className='flex items-center gap-x-1 lg:gap-x-[6px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='lg:hidden'
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className='hidden lg:inline-block'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2Z'
            />
            <rect width='16' height='16' x='4' y='4' fill='#fff' rx='8' />
            <path
              fill='#90A3BF'
              d='M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6Z'
            />
            <rect width='8' height='8' x='8' y='8' fill='#fff' rx='4' />
            <path fill='#90A3BF' d='M11 17h2v4h-2zM17 11h4v2h-4zM3 11h4v2H3z' />
          </svg>
          <p className='text-secondary-300 font-medium text-xs lg:text-sm'>
            {drive}
          </p>
        </div>
        {/* Space */}
        <div className='flex items-center gap-x-1 lg:gap-x-[6px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='lg:hidden'
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='hidden lg:inline-block'
            width='24'
            height='24'
            fill='none'
          >
            <path
              fill='#90A3BF'
              d='M9 2C6.38 2 4.25 4.13 4.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C13.75 4.13 11.62 2 9 2ZM14.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C5.32 21.53 7.16 22 9 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21ZM19.99 7.34c.16 1.94-1.22 3.64-3.13 3.87h-.05c-.06 0-.12 0-.17.02-.97.05-1.86-.26-2.53-.83 1.03-.92 1.62-2.3 1.5-3.8a4.64 4.64 0 0 0-.77-2.18 3.592 3.592 0 0 1 5.15 2.92Z'
            />
            <path
              fill='#90A3BF'
              d='M21.99 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78.72-.65 1.14-1.46 1.22-2.32.1-1.24-.49-2.43-1.67-3.38-.67-.53-1.45-.95-2.3-1.26 2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63Z'
            />
          </svg>
          <p className='text-secondary-300 font-medium text-xs lg:text-sm'>
            {space} <span>People</span>
          </p>
        </div>
      </div>
      {/* Price and Button */}
      <div className='flex items-center justify-between mt-7 '>
        {isDiscount ? (
          <div className='flex flex-col'>
            {/* Off Price */}
            <p className='text-secondary-500 font-bold '>
              $ <span className='text-base xl:text-xl'>{offPrice}</span>
              <span className='text-secondary-300 ml-1 text-xs lg:text-sm'>
                /day
              </span>
            </p>
            {/* Price */}
            <p className='text-secondary-300 font-bold text-xs xl:text-sm line-through'>
              $ <span>{price}</span>
            </p>
          </div>
        ) : (
          <div className='flex flex-col'>
            {/* Price */}
            <p className='text-secondary-500 font-bold '>
              $ <span className='text-base xl:text-xl'>{price}</span>
              <span className='text-secondary-300 ml-1 text-xs lg:text-sm'>
                /day
              </span>
            </p>
          </div>
        )}

        <button className='bg-primary-500 hover:bg-primary-700 text-primary-000 text-xs lg:text-base font-semibold w-24 h-9 lg:w-[116px] lg:h-11 rounded-lg lg:px-4 lg:py-[10px]'>
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default PopularCarCard;
