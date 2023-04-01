import moment from 'moment-timezone';

const timeOptions = [];

for (let hour = 0; hour <= 23; hour++) {
  for (let minute = 0; minute < 60; minute += 60) {
    const time = moment()
      .startOf('day')
      .add(hour, 'hours')
      .add(minute, 'minutes');

    timeOptions.push({
      value: time.format('HH:mm'),
      label: time.format('h:mm A'),
    });
  }
}

const TimePicker = () => {
  // console.log(timeOptions);
  return (
    <div className='flex flex-col items-center'>
      <label
        htmlFor='time'
        className='block font-bold text-base text-secondary-500'
      >
        Time
      </label>
      <select
        name='time'
        id='time'
        defaultValue='time'
        className='block py-2.5 px-0 w-[30%] text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 focus-within:max-h-48 focus:max-h-48 overflow-y-auto '
        style={{ width: '100px', maxHeight: '100px', height: '40px' }}
      >
        <option value='time' disabled className='text-secondary-300'>
          Time
        </option>
        {timeOptions.map((item) => {
          return (
            <option
              value={item.value}
              key={item.value}
              className='w-32 text-secondary-500'
            >
              {item.label}
            </option>
          );
        })}
      </select>
      //////
      <label htmlFor='underline_select' className='sr-only'>
        Underline select
      </label>
      <select
        id='underline_select'
        className='block py-2.5 px-0 w-[30%] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer'
      >
        <option defaultValue>Choose a country</option>
        <option value='US'>United States</option>
        <option value='CA'>Canada</option>
        <option value='FR'>France</option>
        <option value='DE'>Germany</option>
      </select>
    </div>
  );
};

export default TimePicker;
