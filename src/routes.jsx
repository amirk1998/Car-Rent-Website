import Input from './Components/Common/Input';
import SuggestCarList from './Components/SuggestedCars/SuggestCarList/SuggestCarList';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import HomePage from './Pages/HomePage/HomePage';
import PaymentPage from './Pages/PaymantPage/PaymentPage';
import PopularCarsPage from './Pages/PopularCarsPage/PopularCarsPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/popular-cars', element: <PopularCarsPage /> },
  { path: '/suggest-cars', element: <SuggestCarList /> },
  { path: '/pay', element: <PaymentPage /> },
  { path: '/category', element: <CategoryPage /> },
];

export default routes;
