import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./IProduct";

export interface ISearchContext {
    searchString: string;
    setSearchString: Dispatch<SetStateAction<any>>;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<any>>;
    products: Array<IProduct>;
}