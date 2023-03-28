import DatePickerComponent from './Components/Common/DatePickerCalendar';
import DateSelect from './Components/Common/DateSelect';
import LocationSearch from './Components/Common/LocationPicker';
import TimePicker from './Components/Common/TimePicker';
import PickUpComponent from './Components/PickUpComponent/PickUpComponent';
import HomePage from './Pages/HomePage/HomePage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/pick', element: <PickUpComponent /> },
  { path: '/time', element: <TimePicker /> },
  { path: '/geo', element: <LocationSearch /> },
  { path: '/date', element: <DateSelect /> },
];

export default routes;
