import PopularCarCard from './Components/PopularCars/PopularCarCard/PopularCarCard';
import HomePage from './Pages/HomePage/HomePage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/car', element: <PopularCarCard /> },
];

export default routes;
