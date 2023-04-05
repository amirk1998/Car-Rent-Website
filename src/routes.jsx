import HomePage from './Pages/HomePage/HomePage';
import PaymentPage from './Pages/PaymantPage/PaymentPage';
import PopularCarsPage from './Pages/PopularCarsPage/PopularCarsPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    wrapperHeight: 'h-[3700px] md:h-[1800px]',
  },
  {
    path: '/popular-cars',
    element: <PopularCarsPage />,
    wrapperHeight: 'full',
  },

  {
    path: '/pay',
    element: <PaymentPage />,
    wrapperHeight: 'h-[3900px] md:h-[2600px]',
  },
];

export default routes;
