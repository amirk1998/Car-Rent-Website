import React, { useState } from 'react';
import Select from 'react-select';
import moment from 'moment';

const options = [];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '40px',
    width: '125px',
    border: 'none',
    boxShadow: 'none',
    borderRadius: '6px',
    fontSize: '12px',
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: '2px',
    width: '110px',
    maxHeight: '200px',
    overflowY: 'hide',
    fontSize: '12px',
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

// Generate options for react-select
for (let i = 0; i <= 60; i++) {
  const date = moment().add(i, 'days');
  const option = {
    value: date.format('YYYY-MM-DD'),
    label: date.format('YYYY/MM/DD'),
  };
  options.push(option);
}

const DateSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        isSearchable={false}
        placeholder='YYYY/MM/DD'
        menuPlacement='bottom'
        menuPosition='fixed'
        menuShouldScrollIntoView={true}
        menuPortalTarget={document.body}
        maxMenuHeight={200}
        pageSize={3}
      />
    </div>
  );
};

export default DateSelect;
