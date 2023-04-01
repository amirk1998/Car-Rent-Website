import { SuggestedCars } from '../../../../Data/SuggestedCars';
import SuggestCarCard from '../SuggestCarCard/SuggestCarCard';

const SuggestCarList = () => {
  return (
    <div className='flex flex-col sm:grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-hidden sm:h-auto sm:scrollbar-none items-center gap-5 overflow-x-none overflow-y-scroll max-h-[850px] scrollbar-thin scrollbar-track-secondary-100 scrollbar-thumb-secondary-300 '>
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
