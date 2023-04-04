const SelectInput = ({ name, label, options, formik }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className='w-full flex flex-col gap-y-3 mb-5'>
      <label
        htmlFor={name}
        className='text-secondary-500 font-semibold text-sm w-full'
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={values[name] || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        multiple={false}
        className={`bg-page-bg text-secondary-300 font-medium text-xs rounded-lg focus:border-primary-500 focus:outline-none block h-14 w-full py-4 pl-6 pr-4 `}
      >
        <option
          value=''
          disabled
          // selected
          className='text-secondary-300 text-sm font-medium'
        >
          {label}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className='text-secondary-500 text-sm font-medium'
          >
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && touched[name] && (
        <div className='text-error-500 text-xs '>{errors[name]}</div>
      )}
    </div>
  );
};
export default SelectInput;
