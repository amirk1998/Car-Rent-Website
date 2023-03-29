import { useState } from 'react';
import moment from 'moment';
import DateSelect from '../Common/DateSelect';
import LocationSearch from '../Common/LocationPicker';
import TimePicker from '../Common/TimePicker';

const DropOffCar = () => {
  //
  //
  return (
    <div className='flex w-full h-36 bg-primary-000 rounded-xl pt-4'>
      <div className='flex flex-col'>
        {/* Drop Off Title */}
        <div className='flex items-center px-4'>
          <div className='rounded-full border-8 border-info-300 w-2 h-2 mr-2 flex items-center justify-center'>
            <div className='rounded-full border-4 border-info-500 w-2 h-2'></div>
          </div>
          <p className='text-secondary-500 font-semibold text-base '>
            Drop-Off
          </p>
        </div>
        <div className='flex items-center'>
          {/* Location */}
          <div className='flex flex-col items-center justify-center gap-y-2 border-r border-r-secondary-200 px-2 mt-6'>
            <label className='font-bold text-base text-secondary-500'>
              Location
            </label>
            <LocationSearch />
          </div>

          {/* Date */}
          <div className='flex flex-col items-center gap-y-2 border-r border-r-secondary-200 pr-2 mt-6 w-1/2'>
            <label className='font-bold text-base text-secondary-500'>
              Date
            </label>
            <DateSelect />
          </div>

          {/* Time */}
          <div className='flex flex-col items-center gap-y-2 mt-6'>
            <label className='font-bold text-base text-secondary-500'>
              Time
            </label>
            <TimePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropOffCar;
