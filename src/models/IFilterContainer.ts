import { IBaseFilter } from "./IBaseFilter";

export interface IFilterContainer {
    header: string;
    filters: Array<IBaseFilter>;
    showCount: boolean;
    selectedFilterId: number;
    onClickFilter: (filterId: number) => any;
}