import TimePicker from './Components/PickUpCar/TimePick';
import SuggestCarList from './Components/SuggestedCars/SuggestCarList/SuggestCarList';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import HomePage from './Pages/HomePage/HomePage';
import PopularCarsPage from './Pages/PopularCarsPage/PopularCarsPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/popular-cars', element: <PopularCarsPage /> },
  { path: '/suggest-cars', element: <SuggestCarList /> },
  { path: '/category', element: <CategoryPage /> },
  { path: '/time', element: <TimePicker /> },
];

export default routes;
