import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addNewUser } from '../../Services/addNewUserService';
import Input from '../Common/Input';
import moment from 'moment-timezone';
import SelectInput from '../Common/SelectInput';
import { LocationOptions } from '../../../Data/LocationOptions';

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

const dateOptions = [];

for (let i = 0; i <= 60; i++) {
  const date = moment().add(i, 'days');
  const option = {
    value: date.format('YYYY-MM-DD'),
    label: date.format('YYYY/MM/DD'),
  };
  dateOptions.push(option);
}

const initialValues = {
  name: '',
  address: '',
  phoneNumber: '',
  townCity: '',
  locationPickUp: '',
  timePickUp: '',
  datePickUp: '',
  locationDropOff: '',
  timeDropOff: '',
  dateDropOff: '',
  creditCard: '',
  cardHolder: '',
  expireDate: '',
  CVC: '',
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is Required')
    .min(6, 'Name length is not valid'),

  address: Yup.string()
    .required('Address is Required')
    .min(10, 'Address is not valid'),

  phoneNumber: Yup.string()
    .required('Phone Number is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),

  townCity: Yup.string('Town/City is Required').min(
    4,
    'Town/City is not valid'
  ),

  cardNumber: Yup.string()
    .required('Card Number is Required')
    .matches(/^[0-9]{16}$/, 'Invalid Credit Card Number')
    .nullable(),

  // news: array().min(1).required('You must accept the terms and conditions'),
  // terms: Yup.boolean().oneOf(
  //   [true],
  //   'You must accept the terms and conditions'
  // ),
});

const PaymentComponent = () => {
  const [selectedOption, setSelectedOption] = useState('visa');

  const onSubmit = (values) => {
    const data = { ...values, DateCreated: new Date().toLocaleString() };
    addNewUser(data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    // console.log(data);
  };

  const formik = useFormik({
    // initialValues: initialValues,
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className='flex flex-col items-center px-6 w-full'>
      <div>Rental Summary</div>
      <form onSubmit={formik.handleSubmit} className='flex flex-col w-full'>
        {/* Step 1 */}
        <div className='bg-primary-000 p-4 rounded-xl'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-y-1'>
              <p className='text-secondary-500 font-bold text-base'>
                Billing Info
              </p>
              <p className='text-secondary-300 font-medium text-xs'>
                Please enter your billing info
              </p>
            </div>
            <div>
              <p className='text-secondary-300 font-medium text-xs'>
                Step 1 of 4
              </p>
            </div>
          </div>
          <div className='mt-6'>
            <Input formik={formik} name='name' label='Name' />
            <Input formik={formik} name='address' label='Address' />
            <Input formik={formik} name='phoneNumber' label='Phone Number' />
            <Input formik={formik} name='townCity' label='Town/City' />
          </div>
        </div>
        {/* Step 2 */}
        <div className='bg-primary-000 p-4 rounded-xl mt-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-y-1'>
              <p className='text-secondary-500 font-bold text-base'>
                Rental Info
              </p>
              <p className='text-secondary-300 font-medium text-xs'>
                Please select your rental date
              </p>
            </div>
            <div>
              <p className='text-secondary-300 font-medium text-xs'>
                Step 2 of 4
              </p>
            </div>
          </div>
          <div className='mt-6 flex flex-col w-full'>
            <div className='flex items-center mb-5 mt-6'>
              <div className='rounded-full border-8 border-primary-300 w-2 h-2 mr-2 flex items-center justify-center'>
                <div className='rounded-full border-4 border-primary-500 w-2 h-2'></div>
              </div>
              <p className='text-secondary-500 font-semibold text-base '>
                Pick-Up
              </p>
            </div>
            <SelectInput
              label='Location'
              options={LocationOptions}
              name='locationPickUp'
              formik={formik}
            />
            <SelectInput
              label='Time'
              options={timeOptions}
              name='timePickUp'
              formik={formik}
            />
            <SelectInput
              label='Date'
              options={dateOptions}
              name='datePickUp'
              formik={formik}
            />

            <div className='flex items-center mt-6 mb-5'>
              <div className='rounded-full border-8 border-info-300 w-2 h-2 mr-2 flex items-center justify-center'>
                <div className='rounded-full border-4 border-info-500 w-2 h-2'></div>
              </div>
              <p className='text-secondary-500 font-semibold text-base '>
                Drop-Off
              </p>
            </div>
            <SelectInput
              label='Location'
              options={LocationOptions}
              name='locationDropOff'
              formik={formik}
            />
            <SelectInput
              label='Time'
              options={timeOptions}
              name='timeDropOff'
              formik={formik}
            />
            <SelectInput
              label='Date'
              options={dateOptions}
              name='dateDropOff'
              formik={formik}
            />
          </div>
        </div>
        {/* Step 3 */}
        <div className='bg-primary-000 p-4 rounded-xl mt-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-y-1'>
              <p className='text-secondary-500 font-bold text-base'>
                Payment Method
              </p>
              <p className='text-secondary-300 font-medium text-xs'>
                Please enter your payment method
              </p>
            </div>
            <div>
              <p className='text-secondary-300 font-medium text-xs'>
                Step 3 of 4
              </p>
            </div>
          </div>
          <div className='bg-page-bg flex flex-col p-4 mt-6 rounded-xl'>
            {/* VISA */}
            <div className='flex flex-col'>
              {/* Input,Label,Icon */}
              <div className='flex justify-between'>
                {/* Radio Input & Label */}
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    id='visa'
                    name='payment'
                    value='visa'
                    className='w-4 h-4'
                    checked={selectedOption === 'visa'}
                    onChange={() => setSelectedOption('visa')}
                  />
                  <label
                    htmlFor='visa'
                    className='text-secondary-500 font-semibold text-base ml-2'
                  >
                    Credit Card
                  </label>
                </div>
                {/* Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='92'
                  height='20'
                  fill='none'
                >
                  <g clipPath='url(#a)'>
                    <g clipPath='url(#b)'>
                      <path
                        fill='#00579F'
                        d='M20.8 17.77H16.91l2.432-15.49h3.888L20.8 17.77ZM34.895 2.66A9.339 9.339 0 0 0 31.407 2c-3.84 0-6.544 2.109-6.56 5.124-.032 2.225 1.936 3.46 3.408 4.202 1.504.758 2.015 1.253 2.015 1.928-.015 1.038-1.215 1.516-2.335 1.516-1.552 0-2.384-.246-3.648-.824l-.512-.247-.544 3.477c.912.428 2.592.807 4.336.824 4.08 0 6.737-2.076 6.768-5.29.016-1.763-1.023-3.114-3.264-4.218-1.36-.708-2.193-1.186-2.193-1.911.016-.66.705-1.335 2.24-1.335a6.443 6.443 0 0 1 2.896.593l.352.165.529-3.345ZM40.064 12.282c.32-.89 1.552-4.333 1.552-4.333-.016.033.32-.907.512-1.483L42.4 7.8s.736 3.708.896 4.482h-3.232Zm4.8-10.001h-3.008c-.928 0-1.632.28-2.032 1.285l-5.776 14.203h4.08l.816-2.323h4.992c.112.543.464 2.323.464 2.323H48L44.863 2.281ZM13.663 2.28 9.855 12.843 9.44 10.7C8.735 8.23 6.527 5.543 4.063 4.208l3.488 13.545h4.112L17.775 2.28h-4.112Z'
                      />
                      <path
                        fill='#F4A622'
                        d='M6.32 2.28H.064L0 2.595C4.88 3.879 8.112 6.977 9.44 10.7L8.08 3.583c-.224-.99-.912-1.27-1.76-1.302Z'
                      />
                    </g>
                    <path
                      fill='#FF5F00'
                      d='M80.326 2.139h-8.653V17.86h8.653V2.14Z'
                    />
                    <path
                      fill='#EB001B'
                      d='M72.223 10c0-3.194 1.483-6.028 3.763-7.861A9.758 9.758 0 0 0 69.888 0C64.422 0 60 4.472 60 10s4.422 10 9.888 10a9.759 9.759 0 0 0 6.098-2.139c-2.28-1.805-3.763-4.667-3.763-7.861Z'
                    />
                    <path
                      fill='#F79E1B'
                      d='M92 10c0 5.528-4.422 10-9.888 10a9.759 9.759 0 0 1-6.098-2.139c2.307-1.833 3.763-4.667 3.763-7.861s-1.483-6.028-3.763-7.861A9.758 9.758 0 0 1 82.112 0C87.578 0 92 4.5 92 10Z'
                    />
                  </g>
                  <defs>
                    <clipPath id='a'>
                      <path fill='#fff' d='M0 0h92v20H0z' />
                    </clipPath>
                    <clipPath id='b'>
                      <path fill='#fff' d='M0 2h48v16H0z' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Inputs */}
              <div className='mt-5'>
                <Input
                  formik={formik}
                  name='creditCard'
                  label='Card Number'
                  type='number'
                  bgColor='primary-100'
                />
                <Input
                  formik={formik}
                  name='cardHolder'
                  label='Card Holder'
                  bgColor='primary-100'
                />
                <Input
                  formik={formik}
                  name='expireDate'
                  label='Expiration Date (MM/YY)'
                  type='month'
                  bgColor='primary-100'
                />
                <Input
                  formik={formik}
                  name='CVC'
                  label='CVC'
                  type='number'
                  bgColor='primary-100'
                />
              </div>
            </div>
          </div>
          {/* PAYPAL */}
          <div className='bg-page-bg flex flex-col p-4 mt-6 rounded-xl'>
            <div className='flex flex-col'>
              {/* Input,Label,Icon */}
              <div className='flex justify-between'>
                {/* Radio Input & Label */}
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    id='paypal'
                    name='payment'
                    value='paypal'
                    className='w-4 h-4'
                    checked={selectedOption === 'paypal'}
                    onChange={() => setSelectedOption('paypal')}
                  />
                  <label
                    htmlFor='paypal'
                    className='text-secondary-500 font-semibold text-base ml-2'
                  >
                    PayPal
                  </label>
                </div>
                {/* Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='96'
                  height='20'
                  fill='none'
                >
                  <path
                    fill='#022273'
                    d='M35.898 4.473h-5.313a.817.817 0 0 0-.48.15.613.613 0 0 0-.249.381l-2.149 11.623a.324.324 0 0 0 .012.161.364.364 0 0 0 .09.143.444.444 0 0 0 .151.097.51.51 0 0 0 .186.035h2.536a.817.817 0 0 0 .48-.151.612.612 0 0 0 .25-.381l.579-3.135a.613.613 0 0 1 .249-.381.816.816 0 0 1 .48-.151H34.4c3.5 0 5.52-1.445 6.047-4.308.238-1.253.01-2.237-.677-2.926-.755-.757-2.095-1.157-3.873-1.157Zm.613 4.244c-.29 1.627-1.747 1.627-3.155 1.627h-.802l.562-3.037a.368.368 0 0 1 .15-.229.49.49 0 0 1 .288-.09h.367c.96 0 1.864 0 2.332.466.279.279.364.692.258 1.263Zm15.267-.052h-2.544a.49.49 0 0 0-.287.09.368.368 0 0 0-.15.229l-.112.607-.178-.22c-.551-.682-1.78-.91-3.005-.91-2.811 0-5.213 1.817-5.68 4.365-.243 1.27.102 2.486.948 3.334.775.78 1.884 1.104 3.204 1.104 2.265 0 3.521-1.242 3.521-1.242l-.113.603a.324.324 0 0 0 .01.161.363.363 0 0 0 .09.143.444.444 0 0 0 .151.098.509.509 0 0 0 .185.035h2.292a.817.817 0 0 0 .48-.151.613.613 0 0 0 .25-.381L52.213 9.1a.322.322 0 0 0-.01-.161.361.361 0 0 0-.09-.143.44.44 0 0 0-.15-.097.506.506 0 0 0-.185-.035Zm-3.546 4.224c-.245 1.24-1.399 2.073-2.87 2.073-.739 0-1.33-.202-1.708-.585-.376-.38-.519-.922-.4-1.525.23-1.23 1.403-2.09 2.852-2.09.722 0 1.31.205 1.696.592.388.39.541.935.43 1.535Zm17.096-4.224H62.77c-.12 0-.24.026-.346.074a.715.715 0 0 0-.265.202l-3.526 4.431-1.495-4.258a.643.643 0 0 0-.267-.324.828.828 0 0 0-.441-.125h-2.512c-.07 0-.14.014-.203.042a.43.43 0 0 0-.158.116.349.349 0 0 0-.078.165c-.01.06-.004.12.018.177l2.816 7.05-2.647 3.188a.332.332 0 0 0-.032.392.41.41 0 0 0 .163.15.5.5 0 0 0 .23.055h2.554c.119 0 .236-.024.342-.072a.713.713 0 0 0 .264-.198l8.503-10.472a.332.332 0 0 0 .029-.39.41.41 0 0 0-.163-.148.501.501 0 0 0-.23-.055Z'
                  />
                  <path
                    fill='#167FC4'
                    d='M73.788 4.473h-5.313a.817.817 0 0 0-.48.151.613.613 0 0 0-.25.38l-2.148 11.623a.324.324 0 0 0 .011.162.363.363 0 0 0 .09.142.44.44 0 0 0 .15.098.507.507 0 0 0 .186.034h2.726a.571.571 0 0 0 .336-.106.429.429 0 0 0 .174-.266l.61-3.295a.613.613 0 0 1 .249-.38.818.818 0 0 1 .48-.152h1.68c3.5 0 5.52-1.445 6.048-4.308.238-1.252.01-2.236-.678-2.926-.755-.756-2.093-1.157-3.871-1.157Zm.613 4.245c-.29 1.627-1.746 1.627-3.156 1.627h-.8l.563-3.038a.367.367 0 0 1 .149-.228.488.488 0 0 1 .287-.09h.368c.958 0 1.864 0 2.332.466.279.278.363.692.257 1.263Zm15.267-.052h-2.543a.488.488 0 0 0-.288.09.366.366 0 0 0-.148.229l-.113.607-.179-.22c-.55-.682-1.778-.91-3.004-.91-2.811 0-5.211 1.816-5.679 4.364-.242 1.272.102 2.487.947 3.335.777.779 1.884 1.104 3.204 1.104 2.265 0 3.522-1.243 3.522-1.243l-.114.603a.324.324 0 0 0 .011.162.365.365 0 0 0 .09.143.443.443 0 0 0 .151.098.507.507 0 0 0 .186.035h2.291a.817.817 0 0 0 .48-.152.613.613 0 0 0 .249-.38l1.375-7.43a.325.325 0 0 0-.011-.16.365.365 0 0 0-.09-.143.444.444 0 0 0-.152-.098.509.509 0 0 0-.185-.034ZM86.12 12.89c-.243 1.24-1.399 2.072-2.87 2.072-.737 0-1.33-.202-1.708-.585-.376-.38-.518-.922-.4-1.525.231-1.23 1.403-2.089 2.852-2.089.722 0 1.31.205 1.696.591.39.39.543.936.43 1.536Zm6.546-8.098-2.18 11.835a.323.323 0 0 0 .01.162.363.363 0 0 0 .09.142.441.441 0 0 0 .15.098.507.507 0 0 0 .186.034h2.192c.364 0 .674-.225.73-.532l2.15-11.622a.323.323 0 0 0-.011-.161.363.363 0 0 0-.09-.143.442.442 0 0 0-.15-.097.508.508 0 0 0-.186-.035h-2.455a.49.49 0 0 0-.287.09.368.368 0 0 0-.15.23Z'
                  />
                  <path
                    fill='#022273'
                    d='m5.643 19.322.407-2.202-.905-.018H.823L3.826.856A.204.204 0 0 1 3.91.73a.272.272 0 0 1 .16-.05h7.287c2.419 0 4.088.43 4.96 1.277.408.397.669.813.794 1.27.133.48.135 1.053.006 1.753l-.01.05v.449l.41.197c.311.135.591.317.826.538.35.34.576.772.672 1.285.098.526.066 1.153-.096 1.863-.186.817-.488 1.528-.895 2.11-.359.521-.842.973-1.418 1.325a6.267 6.267 0 0 1-1.909.735c-.704.157-1.506.235-2.386.235h-.567c-.406 0-.8.125-1.109.348a1.426 1.426 0 0 0-.578.88l-.043.199-.717 3.88-.033.142c-.008.046-.023.068-.045.083a.133.133 0 0 1-.075.024h-3.5Z'
                  />
                  <path
                    fill='#167FC4'
                    d='M17.903 5.082c-.022.118-.047.24-.075.364-.96 4.21-4.248 5.663-8.447 5.663H7.244c-.514 0-.947.319-1.027.75l-1.094 5.923-.31 1.678a.4.4 0 0 0 .014.2.45.45 0 0 0 .11.176.55.55 0 0 0 .187.121.63.63 0 0 0 .229.043h3.791c.45 0 .83-.278.902-.656l.037-.165.714-3.865.045-.212c.07-.379.453-.657.902-.657h.567c3.673 0 6.549-1.273 7.39-4.955.35-1.538.169-2.822-.76-3.726a3.616 3.616 0 0 0-1.038-.682Z'
                  />
                  <path
                    fill='#022273'
                    d='M16.897 4.74a8.711 8.711 0 0 0-.935-.178 13.88 13.88 0 0 0-1.884-.117H8.367c-.218 0-.428.066-.593.186a.756.756 0 0 0-.308.471l-1.215 6.565-.035.192a.861.861 0 0 1 .35-.537 1.15 1.15 0 0 1 .676-.213H9.38c4.199 0 7.486-1.455 8.447-5.663a8.15 8.15 0 0 0 .075-.365 5.637 5.637 0 0 0-1.005-.342Z'
                  />
                  <path
                    fill='#022273'
                    d='M7.468 5.102a.754.754 0 0 1 .308-.47c.165-.121.375-.187.593-.186h5.71c.677 0 1.309.037 1.885.117.39.052.775.13 1.15.234.284.08.547.175.79.284.287-1.555-.002-2.614-.987-3.573C15.83.452 13.868 0 11.358 0H4.072c-.513 0-.95.318-1.03.75L.009 17.164a.459.459 0 0 0 .015.229.514.514 0 0 0 .127.202.625.625 0 0 0 .213.138c.083.032.172.05.262.05h4.499l1.13-6.114 1.214-6.566Z'
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Bitcoin */}
          <div className='bg-page-bg flex flex-col p-4 mt-6 rounded-xl'>
            <div className='flex flex-col'>
              {/* Input,Label,Icon */}
              <div className='flex justify-between'>
                {/* Radio Input & Label */}
                <div className='flex items-center justify-center'>
                  <input
                    type='radio'
                    id='bitcoin'
                    name='payment'
                    value='bitcoin'
                    className='w-4 h-4'
                    checked={selectedOption === 'bitcoin'}
                    onChange={() => setSelectedOption('bitcoin')}
                  />
                  <label
                    htmlFor='bitcoin'
                    className='text-secondary-500 font-semibold text-base ml-2'
                  >
                    Bitcoin
                  </label>
                </div>
                {/* Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='92'
                  height='20'
                  fill='none'
                >
                  <path
                    fill='#FCA014'
                    d='M18.92 12.42c-1.283 5.356-6.494 8.617-11.64 7.28C2.136 18.366-.996 12.94.288 7.583 1.57 2.224 6.782-1.036 11.926.299c5.146 1.336 8.277 6.763 6.994 12.12Z'
                  />
                  <path
                    fill='#fff'
                    d='M13.839 8.575c.19-1.33-.782-2.046-2.113-2.523l.432-1.803-1.054-.273-.42 1.755c-.277-.072-.562-.14-.845-.207l.424-1.767-1.054-.273-.431 1.802c-.23-.055-.455-.108-.673-.165v-.006l-1.453-.377-.28 1.171s.782.187.765.199c.427.11.504.405.492.638l-.492 2.053c.03.008.067.02.11.037-.036-.01-.073-.02-.112-.029l-.69 2.877c-.051.135-.184.337-.482.26.01.016-.766-.199-.766-.199l-.523 1.256 1.371.356c.255.067.505.136.752.202l-.437 1.823 1.053.273.432-1.803c.287.08.567.156.84.226l-.43 1.796 1.053.273.436-1.82c1.797.355 3.149.212 3.717-1.48.459-1.363-.022-2.149-.968-2.661.689-.166 1.207-.637 1.346-1.611ZM11.43 12.09c-.326 1.363-2.53.626-3.244.441l.58-2.415c.713.186 3.004.553 2.664 1.974Zm.326-3.535c-.297 1.24-2.131.61-2.726.455l.525-2.19c.594.154 2.51.442 2.2 1.735Z'
                  />
                  <g fill='#90A3BF' opacity='.5'>
                    <path d='M28.148 6.05c.778 0 1.451.145 2.017.43a4.093 4.093 0 0 1 1.413 1.165c.37.49.647 1.064.825 1.721.177.66.266 1.368.266 2.126a8.828 8.828 0 0 1-.619 3.303 8.61 8.61 0 0 1-1.69 2.71 7.948 7.948 0 0 1-2.528 1.82 7.457 7.457 0 0 1-3.158.67c-.147 0-.404-.004-.768-.012a10.795 10.795 0 0 1-1.25-.112c-.471-.069-.97-.17-1.496-.306a7.303 7.303 0 0 1-1.495-.556L23.87.61l3.767-.608-1.506 6.53c.323-.152.648-.269.972-.354a4.154 4.154 0 0 1 1.044-.128Zm-3.16 10.834a3.2 3.2 0 0 0 1.604-.43 4.27 4.27 0 0 0 1.302-1.152 5.883 5.883 0 0 0 .863-1.633 5.77 5.77 0 0 0 .316-1.9c0-.81-.13-1.44-.39-1.897-.258-.455-.738-.684-1.434-.684-.228 0-.522.046-.886.127a2.184 2.184 0 0 0-.986.532l-1.603 6.934.255.05c.071.018.15.03.229.038.083.01.178.015.293.015h.437ZM36.575 19.643h-3.598l3.039-13.311h3.623l-3.064 13.311ZM38.326 4.71c-.502 0-.957-.155-1.361-.467-.408-.31-.61-.788-.61-1.43 0-.354.07-.686.207-1 .139-.312.32-.58.548-.81.227-.227.49-.408.79-.544.3-.135.62-.202.96-.202.503 0 .956.156 1.361.468.404.313.607.79.607 1.43 0 .355-.068.688-.207 1a2.636 2.636 0 0 1-.546.81 2.639 2.639 0 0 1-.79.544 2.29 2.29 0 0 1-.959.201ZM42.791 3.015l3.769-.608-.926 3.924h4.036l-.729 3.087H44.93l-1.069 4.656c-.098.388-.154.75-.17 1.088-.017.338.024.629.121.873.097.246.27.435.523.569.25.136.61.204 1.081.204a5.54 5.54 0 0 0 1.132-.115c.364-.075.732-.18 1.105-.316l.268 2.887c-.486.185-1.013.345-1.58.48-.568.136-1.24.201-2.018.201-1.118 0-1.985-.173-2.602-.517-.616-.346-1.052-.82-1.313-1.42-.257-.596-.372-1.285-.34-2.06.033-.778.146-1.595.34-2.456L42.79 3.015Z' />
                  </g>
                  <path
                    fill='#90A3BF'
                    d='M49.513 14.328c0-1.147.178-2.228.534-3.24a8.04 8.04 0 0 1 1.533-2.66A7.191 7.191 0 0 1 54 6.632c.945-.437 2.004-.658 3.17-.658.73 0 1.383.072 1.957.216a7.717 7.717 0 0 1 1.57.569l-1.242 2.938c-.324-.137-.66-.258-1.008-.367-.348-.112-.774-.166-1.276-.166-1.201 0-2.15.431-2.857 1.29-.704.86-1.058 2.017-1.058 3.469 0 .86.178 1.556.536 2.088.356.532 1.013.797 1.968.797.471 0 .926-.052 1.362-.151a6.523 6.523 0 0 0 1.167-.38l.269 3.011c-.455.184-.957.35-1.508.495-.551.14-1.208.213-1.97.213-1.005 0-1.856-.153-2.552-.454-.696-.307-1.271-.713-1.725-1.228a4.679 4.679 0 0 1-.985-1.811 7.708 7.708 0 0 1-.305-2.175ZM65.495 19.996c-.859 0-1.605-.136-2.238-.405a4.133 4.133 0 0 1-1.566-1.14 4.975 4.975 0 0 1-.936-1.732c-.213-.667-.315-1.404-.315-2.213 0-1.014.157-2.028.473-3.039a8.723 8.723 0 0 1 1.399-2.732 7.557 7.557 0 0 1 2.26-1.99c.888-.513 1.911-.77 3.06-.77.843 0 1.585.136 2.227.406.638.269 1.164.65 1.58 1.138.411.491.724 1.067.934 1.734.211.665.316 1.405.316 2.214 0 1.011-.154 2.025-.46 3.039a8.905 8.905 0 0 1-1.362 2.732 7.217 7.217 0 0 1-2.248 1.986c-.899.514-1.941.772-3.124.772Zm1.798-10.831c-.533 0-1.005.16-1.409.48a4.09 4.09 0 0 0-1.02 1.215 6.142 6.142 0 0 0-.621 1.607 7.196 7.196 0 0 0-.206 1.657c0 .845.131 1.503.388 1.976.261.471.73.708 1.41.708.536 0 1.005-.16 1.411-.482.403-.32.744-.725 1.02-1.214a6.156 6.156 0 0 0 .622-1.607c.136-.581.205-1.135.205-1.658 0-.842-.13-1.502-.39-1.975-.259-.47-.73-.707-1.41-.707ZM76.61 19.643h-3.6l3.038-13.311h3.624L76.61 19.643ZM78.358 4.71a2.17 2.17 0 0 1-1.36-.467c-.405-.31-.609-.788-.609-1.43 0-.354.07-.686.207-1 .138-.312.32-.58.548-.81a2.68 2.68 0 0 1 .79-.544c.299-.135.619-.202.959-.202.503 0 .957.156 1.362.468.405.313.609.79.609 1.43 0 .355-.073.688-.209 1a2.63 2.63 0 0 1-.545.81c-.228.228-.49.409-.79.544-.3.136-.62.201-.962.201ZM82.266 6.937c.273-.083.578-.183.91-.292.332-.108.704-.21 1.12-.3.41-.095.874-.171 1.384-.23.51-.06 1.091-.09 1.737-.09 1.897 0 3.206.575 3.928 1.723.721 1.147.846 2.717.378 4.707l-1.655 7.187h-3.622l1.604-7.036c.098-.44.175-.864.232-1.279.057-.411.054-.774-.013-1.088a1.311 1.311 0 0 0-.449-.76c-.237-.193-.596-.29-1.082-.29-.47 0-.947.052-1.434.153l-2.358 10.3h-3.623l2.943-12.705Z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentComponent;
