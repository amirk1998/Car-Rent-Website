import { SuggestedCars } from '../../../../Data/SuggestedCars';
import SuggestCarCard from '../SuggestCarCard/SuggestCarCard';

const SuggestCarList = () => {
  return (
    <div className='flex flex-col items-center gap-x-5 gap-y-5 overflow-x-none overflow-y-scroll max-h-[1000px] scrollbar-thin  scrollbar-track-secondary-300 '>
      {SuggestedCars.map((item) => {
        return (
          <SuggestCarCard
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

export default SuggestCarList;
