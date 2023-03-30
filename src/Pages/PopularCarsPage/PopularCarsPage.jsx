import PopularCarList from '../../Components/PopularCars/PopularCarList/PopularCarList';

const PopularCarsPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-secondary-500 text-xl text-center mt-4 mb-8'>
        Popular Cars
      </h1>
      <PopularCarList />
    </div>
  );
};

export default PopularCarsPage;
