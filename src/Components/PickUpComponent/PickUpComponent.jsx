import { useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PickUpComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const currentDate = moment();
  const maxDate = moment('2024-01-01');

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={currentDate.toDate()}
      maxDate={maxDate.toDate()}
      showDisabledMonthNavigation
      // withPortal
      className='rounded-xl text-secondary-300'
    />
  );
};

export default PickUpComponent;
