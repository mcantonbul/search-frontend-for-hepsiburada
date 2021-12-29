import { Dispatch, SetStateAction } from "react";
import { IBaseFilter } from "./IBaseFilter";

export interface IFilterContext {
    orderFilters: Array<IBaseFilter>;
    brandFilters: Array<IBaseFilter>;
    colorFilters: Array<IBaseFilter>;
    setCurrentOrderFilterId: (orderFilterId: number) => void;
    currentOrderFilterId: number;
    brandId: number;
    colorId: number;
    setColorId: (orderFilterId: number) => void;
    setBrandId: (orderFilterId: number) => void;
    clearFilters: () => void;
    setBrandFilters: Dispatch<SetStateAction<any>>;
    setColorFilters: Dispatch<SetStateAction<any>>;
}