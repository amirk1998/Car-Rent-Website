import PopularCarCard from './Components/PopularCars/PopularCarCard/PopularCarCard';
import PopularCarList from './Components/PopularCars/PopularCarList/PopularCarList';
import HomePage from './Pages/HomePage/HomePage';
import PopularCarsPage from './Pages/PopularCarsPage/PopularCarsPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/popular-cars', element: <PopularCarsPage /> },
];

export default routes;
