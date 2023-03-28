import React, { useState } from 'react';
import Select from 'react-select';

const options = [];
for (let i = 0; i < 24; i++) {
  for (let j = 0; j < 60; j += 30) {
    options.push({
      label: `${i.toString().padStart(2, '0')}:${j
        .toString()
        .padStart(2, '0')}`,
      value: `${i.toString().padStart(2, '0')}:${j
        .toString()
        .padStart(2, '0')}`,
    });
  }
}

const TimePicker = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: '100px',
      maxHeight: '200px',
      overflowY: 'scroll',
      color: state.isSelected && '#90a3bf',
      // color: '#90a3bf',
    }),
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      // isClearable
      isSearchable={false}
      placeholder='7:00'
      className='w-38 border-0 focus:border-0 ring-0 focus:ring-0 text-xs '
      styles={customStyles}
    />
  );
};

export default TimePicker;
