import PickUpCar from './Components/PickUpCar/PickUpCar';
import HomePage from './Pages/HomePage/HomePage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/pick', element: <PickUpCar /> },
];

export default routes;
