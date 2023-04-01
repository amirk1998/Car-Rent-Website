import { createContext, useContext, useReducer } from 'react';
import { PopularCars } from '../../Data/PopularCars';

const CarContext = createContext();
const CarContextDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'filter': {
      // const value = action.selectedOption.value;
      // if (value === '') {
      //   return productsData;
      // } else {
      //   const UpdatedProducts = productsData.filter(
      //     (p) => p.availableSizes.indexOf(value) >= 0
      //   );
      //   return UpdatedProducts;
      // }
    }

    case 'search': {
      const value = action.event.target.value;
      console.log(value);
      if (value === '') {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }
    default:
      return state;
  }
};

const CarProvider = ({ children }) => {
  const [cars, dispatch] = useReducer(reducer, PopularCars);
  return (
    <CarContext.Provider value={cars}>
      <CarContextDispatcher.Provider value={dispatch}>
        {children}
      </CarContextDispatcher.Provider>
    </CarContext.Provider>
  );
};

export default CarProvider;

export const useCars = () => useContext(CarContext);
export const useCarsActions = () => useContext(CarContextDispatcher);
