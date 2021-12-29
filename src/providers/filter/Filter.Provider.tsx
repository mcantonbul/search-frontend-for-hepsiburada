import { createContext, FC, useCallback, useEffect, useState } from "react";
import { IBaseFilter } from "../../models/IBaseFilter";
import { IFilterContext } from "../../models/IFilterContext";
import { IFilterProviderProps } from "../../models/IFilterProviderProps";
import { IOrderFilter } from "../../models/IOrderFilter";

export const FilterContext = createContext<IFilterContext>({
  setCurrentOrderFilterId: (orderFilterId: number) => {},
  currentOrderFilterId: -1,
  orderFilters: [],
  brandFilters: [],
  colorFilters: [],
  setBrandId: (brandId: number) => {},
  brandId: -1,
  setColorId: (colorId: number) => {},
  colorId: -1,
  clearFilters: () => {},
  setBrandFilters: () => {},
  setColorFilters: () => {},
});

const FilterProvider: FC<IFilterProviderProps> = ({ children }) => {
  const [currentOrderFilterId, _setCurrentOrderFilterId] = useState(-1);
  const [brandId, _setBrandId] = useState(-1);
  const [colorId, _setColorId] = useState(-1);

  const [orderFilters, setOrderFilters] = useState(new Array<IBaseFilter>());
  const [brandFilters, _setBrandFilters] = useState(new Array<IBaseFilter>());
  const [colorFilters, _setColorFilters] = useState(new Array<IBaseFilter>());

  const setCurrentOrderFilterId = useCallback(
    (orderFilterId: number) => _setCurrentOrderFilterId(orderFilterId),
    []
  );

  const setBrandId = useCallback(
    (brandId: number) => _setBrandId(brandId),
    []
  );

  const setColorId = useCallback(
    (colorId: number) => _setColorId(colorId),
    []
  );

  const setBrandFilters = useCallback(
    (brandFilters: Array<IBaseFilter>) => _setBrandFilters(brandFilters),
    []
  );

  const setColorFilters = useCallback(
    (colorFilters: Array<IBaseFilter>) => _setColorFilters(colorFilters),
    []
  );

  const clearFilters = useCallback(() => {
    _setColorId(-1);
    _setBrandId(-1);
    _setCurrentOrderFilterId(-1);
  }, []);


  useEffect(()=>{
      /**
       * @TODO Service file...
       */
    fetch("http://localhost:8080/order-filters")
      .then((response) => response.json())
      .then((data: Array<IOrderFilter>) =>
        setOrderFilters(
          data.map(
            (s) => ({ id: s.orderFilterId, label: s.title })
          )
        )
      );
  }, [])



  return (
    <FilterContext.Provider
      value={{
        currentOrderFilterId,
        setCurrentOrderFilterId,
        orderFilters,
        brandId,
        colorId,
        setColorId,
        setBrandId,
        clearFilters,
        brandFilters,
        colorFilters,
        setBrandFilters,
        setColorFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
