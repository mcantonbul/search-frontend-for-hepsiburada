import { useContext } from "react";
import { IFilterContainer } from "../../models/IFilterContainer";
import { FilterContext } from "../../providers/filter/Filter.Provider";
import FilterContainer from "../FilterContainer/FilterContainer";

function Filters() {
  const {
    currentOrderFilterId,
    setCurrentOrderFilterId,
    orderFilters,
    colorFilters,
    brandFilters,
    colorId,
    brandId,
    setBrandId,
    setColorId,
  } = useContext(FilterContext);

  return (
    <div className="filters">
      <FilterContainer
        filterContainer={
          {
            header: "Renk",
            filters: colorFilters,
            showCount: true,
            selectedFilterId: colorId,
            onClickFilter: (_colorId) => {
              setColorId(_colorId === colorId ? -1 : _colorId);
            },
          } as IFilterContainer
        }
      ></FilterContainer>
      <FilterContainer
        filterContainer={
          {
            header: "Sıralama",
            filters: orderFilters,
            showCount: false,
            selectedFilterId: currentOrderFilterId,
            onClickFilter: (_orderId) => {
              setCurrentOrderFilterId(_orderId === currentOrderFilterId ? -1 : _orderId);
            },
          } as IFilterContainer
        }
      ></FilterContainer>
      <FilterContainer
        filterContainer={
          {
            header: "Marka",
            filters: brandFilters,
            showCount: true,
            selectedFilterId: brandId,
            onClickFilter: (_brandId) => {
              setBrandId(_brandId === brandId ? -1 : _brandId);
            },
          } as IFilterContainer
        }
      ></FilterContainer>
    </div>
  );
}

export default Filters;
