import DateSelect from './Components/Common/DateSelect';
import LocationSearch from './Components/Common/LocationPicker';
import TimePicker from './Components/Common/TimePicker';
import ParentComponent from './Components/PickUpCar/Parent';
import PickUpCar from './Components/PickUpCar/PickUpCar';
import HomePage from './Pages/HomePage/HomePage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/pick', element: <PickUpCar /> },
];

export default routes;
