import { PopularCars } from '../../../../Data/PopularCars';
import PopularCarCard from '../PopularCarCard/PopularCarCard';

const PopularCarList = ({ numberOfItems }) => {
  const visibleCars = PopularCars.slice(0, numberOfItems);

  return (
    <div className='flex sm:grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-hidden sm:h-auto sm:scrollbar-none sm:overscroll-none overscroll-contain items-center gap-5 overflow-x-scroll scrollbar-none scrollbar-track-transparent overscroll-y-none w-full'>
      {visibleCars.map((item) => {
        return (
          <PopularCarCard
            carName={item.carName}
            type={item.type}
            space={item.space}
            capacity={item.capacity}
            price={item.price}
            offPrice={item.offPrice}
            isDiscount={item.isDiscount}
            drive={item.drive}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default PopularCarList;
