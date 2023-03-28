import PickUpComponent from './Components/PickUpComponent/PickUpComponent';
import TimePicker from './Components/PickUpComponent/TimePicker';
import HomePage from './Pages/HomePage/HomePage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/date', element: <PickUpComponent /> },
  { path: '/time', element: <TimePicker /> },
];

export default routes;
