import React from 'react';
import Select from 'react-select';

const LocationPicker = ({ options, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label htmlFor='location' className='block text-gray-700 font-bold mb-2'>
        Location
      </label>
      <Select
        id='location'
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const DatePicker = ({ options, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label htmlFor='date' className='block text-gray-700 font-bold mb-2'>
        Date
      </label>
      <Select id='date' options={options} value={value} onChange={onChange} />
    </div>
  );
};

const TimePicker = ({ options, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label htmlFor='time' className='block text-gray-700 font-bold mb-2'>
        Time
      </label>
      <Select id='time' options={options} value={value} onChange={onChange} />
    </div>
  );
};

const LocationDateTimePicker = ({
  locationOptions,
  dateOptions,
  timeOptions,
  locationValue,
  dateValue,
  timeValue,
  onLocationChange,
  onDateChange,
  onTimeChange,
}) => {
  return (
    <div className='flex items-center md:flex md:justify-between md:flex-wrap'>
      <div className='w-full md:w-1/3 px-3'>
        <LocationPicker
          options={locationOptions}
          value={locationValue}
          onChange={onLocationChange}
        />
      </div>
      <div className='w-full md:w-1/3 px-3'>
        <DatePicker
          options={dateOptions}
          value={dateValue}
          onChange={onDateChange}
        />
      </div>
      <div className='w-full md:w-1/3 px-3'>
        <TimePicker
          options={timeOptions}
          value={timeValue}
          onChange={onTimeChange}
        />
      </div>
    </div>
  );
};

export default LocationDateTimePicker;
