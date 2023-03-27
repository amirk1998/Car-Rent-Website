import PickUpComponent from './Components/PickUpComponent/PickUpComponent';
import HomePage from './Pages/HomePage/HomePage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/date', element: <PickUpComponent /> },
];

export default routes;
