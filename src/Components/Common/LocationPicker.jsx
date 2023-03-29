import React, { useState } from 'react';
import Select from 'react-select';

const cityOptions = [
  { value: 'New York', label: 'New York, NY' },
  { value: 'Los Angeles', label: 'Los Angeles, CA' },
  { value: 'Chicago', label: 'Chicago, IL' },
  { value: 'Houston', label: 'Houston, TX' },
  { value: 'Phoenix', label: 'Phoenix, AZ' },
  { value: 'Philadelphia', label: 'Philadelphia, PA' },
  { value: 'San Antonio', label: 'San Antonio, TX' },
  { value: 'San Diego', label: 'San Diego, CA' },
  { value: 'Dallas', label: 'Dallas, TX' },
  { value: 'San Jose', label: 'San Jose, CA' },
  { value: 'Austin', label: 'Austin, TX' },
  { value: 'Jacksonville', label: 'Jacksonville, FL' },
  { value: 'Fort Worth', label: 'Fort Worth, TX' },
  { value: 'Columbus', label: 'Columbus, OH' },
  { value: 'San Francisco', label: 'San Francisco, CA' },
  { value: 'Charlotte', label: 'Charlotte, NC' },
  { value: 'Indianapolis', label: 'Indianapolis, IN' },
  { value: 'Seattle', label: 'Seattle, WA' },
  { value: 'Denver', label: 'Denver, CO' },
  { value: 'Washington', label: 'Washington, D.C.' },
  { value: 'Boston', label: 'Boston, MA' },
  { value: 'Nashville', label: 'Nashville, TN' },
  { value: 'El Paso', label: 'El Paso, TX' },
  { value: 'Detroit', label: 'Detroit, MI' },
  { value: 'Memphis', label: 'Memphis, TN' },
  { value: 'Portland', label: 'Portland, OR' },
  { value: 'Oklahoma City', label: 'Oklahoma City, OK' },
  { value: 'Las Vegas', label: 'Las Vegas, NV' },
  { value: 'Louisville', label: 'Louisville, KY' },
  { value: 'Baltimore', label: 'Baltimore, MD' },
  { value: 'Milwaukee', label: 'Milwaukee, WI' },
  { value: 'Albuquerque', label: 'Albuquerque, NM' },
  { value: 'Tucson', label: 'Tucson, AZ' },
  { value: 'Fresno', label: 'Fresno, CA' },
  { value: 'Sacramento', label: 'Sacramento, CA' },
  { value: 'Mesa', label: 'Mesa, AZ' },
  { value: 'Atlanta', label: 'Atlanta, GA' },
  { value: 'Kansas City', label: 'Kansas City, MO' },
  { value: 'Colorado Springs', label: 'Colorado Springs, CO' },
  { value: 'Miami', label: 'Miami, FL' },
  { value: 'Raleigh', label: 'Raleigh, NC' },
  { value: 'Omaha', label: 'Omaha, NE' },
  { value: 'Long Beach', label: 'Long Beach, CA' },
  { value: 'Virginia Beach', label: 'Virginia Beach, VA' },
  { value: 'Oakland', label: 'Oakland, OAK ' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '40px',
    width: '80px',
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

const LocationSearch = () => {
  const [searchText, setSearchText] = useState('');

  const cityNames = cityOptions.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setSearchText(inputValue);
  };

  const filterOptions = (candidate) => {
    return candidate.label.toLowerCase().includes(searchText.toLowerCase());
  };

  return (
    <Select
      options={cityNames.filter(filterOptions)}
      onInputChange={handleInputChange}
      styles={customStyles}
      placeholder='City'
      menuPlacement='bottom'
      menuPosition='fixed'
      menuShouldScrollIntoView={true}
      menuPortalTarget={document.body}
      maxMenuHeight={200}
      pageSize={3}
    />
  );
};

export default LocationSearch;
