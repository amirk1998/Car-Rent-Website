const Input = ({ label, name, formik, type = 'text' }) => {
  return (
    <div className='w-full flex flex-col gap-y-3 mb-5'>
      <label
        htmlFor={name}
        className='text-secondary-500 font-semibold text-sm w-full'
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
        className={`bg-page-bg placeholder-secondary-300 placeholder:text-xs placeholder:font-medium text-secondary-500 font-medium text-xs rounded-lg focus:border-primary-500 focus:outline-none block h-14 w-full py-4 pl-6 pr-4 ${
          formik.errors[name] && formik.touched[name]
            ? 'border-2 border-error-500'
            : 'border-0'
        }`}
        placeholder={label}
        required
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className='text-error-500 text-xs '>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
