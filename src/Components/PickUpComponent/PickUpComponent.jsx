import { useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiChevronDown } from 'react-icons/hi2';

const PickUpComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const currentDate = moment();
  const maxDate = moment('2024-01-01');

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendarOpen = () => {
    setShowCalendar(true);
  };

  return (
    <form className='flex items-center w-full px-6'>
      <div className='flex flex-col items-center'>
        <label htmlFor='' className='font-bold text-base text-secondary-500'>
          Date
        </label>
        <div className='flex items-center justify-center'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={currentDate.toDate()}
            maxDate={maxDate.toDate()}
            open={showCalendar}
            onCalendarClose={toggleCalendar}
            onCalendarOpen={handleCalendarOpen}
            dateFormat=' d,MMMM, yyyy'
            showDisabledMonthNavigation
            disabledKeyboardNavigation
            // withPortal
            className='rounded-xl text-secondary-300 border-0 text-center w-40 text-xs font-normal outline-none focus:outline-none focus:border-0 focus:border-collapse ring-0 focus:ring-0 cursor-pointer bg-page-bg'
            calendarClassName=''
          />
          <HiChevronDown
            className='text-secondary-500 cursor-pointer font-bold text-sm'
            onClick={toggleCalendar}
          />
        </div>
      </div>
      <div></div>
    </form>
  );
};

export default PickUpComponent;
