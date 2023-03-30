import { PopularCars } from '../../../../Data/PopularCars';
import PopularCarCard from '../PopularCarCard/PopularCarCard';

const PopularCarList = () => {
  return (
    <div className='flex overscroll-contain items-center gap-x-5 gap-y-5 overflow-x-scroll scrollbar-none scrollbar-track-transparent overscroll-y-none w-full'>
      {PopularCars.map((item) => {
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
