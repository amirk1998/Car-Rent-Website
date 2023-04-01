import React, { useState } from 'react';
import Select from 'react-select';
import moment from 'moment-timezone';
import { HiChevronDown } from 'react-icons/hi2';

const timeOptions = [];

for (let hour = 0; hour <= 23; hour++) {
  for (let minute = 0; minute < 60; minute += 30) {
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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '40px',
    width: '90px',
    border: 'none',
    boxShadow: 'none',
    borderRadius: '6px',
    fontSize: '12px',

    // border: '1px solid #e5e7eb',
    // borderRadius: '5px',
    // boxShadow: state.isFocused ? '0 0 0 2px #6b7280' : 'none',
    // '&:hover': {
    //   borderColor: '#d1d5db',
    // },
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: '2px',
    width: '105px',
    maxHeight: '200px',
    overflowY: 'hide',

    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    zIndex: '999',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    padding: '8px 16px',
    backgroundColor: state.isSelected ? '#f9fafb' : 'transparent',
    color: state.isSelected ? '#90a3bf' : '#374151',
    '&:hover': {
      backgroundColor: '#658df1',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    color: '#90a3bf',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#6B7280',
    '&:hover': {
      color: '#4B5563',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

const TimePicker = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <Select
      options={timeOptions}
      onChange={handleChange}
      value={selectedOption}
      styles={customStyles}
      isSearchable={false}
      placeholder='Time'
      menuPlacement='bottom'
      menuPosition='fixed'
      menuShouldScrollIntoView={true}
      menuPortalTarget={document.body}
      maxMenuHeight={200}
      pageSize={3}
      components={{ DropdownIndicator: () => <HiChevronDown /> }}
    />
  );
};

export default TimePicker;
