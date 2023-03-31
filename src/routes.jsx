import SuggestCarList from './Components/SuggestedCars/SuggestCarList/SuggestCarList';
import HomePage from './Pages/HomePage/HomePage';
import PopularCarsPage from './Pages/PopularCarsPage/PopularCarsPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/popular-cars', element: <PopularCarsPage /> },
  { path: '/suggest-cars', element: <SuggestCarList /> },
];

export default routes;
