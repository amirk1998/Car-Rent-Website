import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addNewUser } from '../../Services/addNewUserService';
import Input from '../Common/Input';
import moment from 'moment-timezone';
import SelectInput from '../Common/SelectInput';

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

const initialValues = {
  name: '',
  address: '',
  phoneNumber: '',
  townCity: '',
  timePickUp: '',
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

const PaymentComp = () => {
  // const [timePickUp, setTimePickUp] = useState('Time');

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
            <SelectInput
              label='Time'
              options={timeOptions}
              name='timePickUp'
              formik={formik}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentComp;
