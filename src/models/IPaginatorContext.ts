import { Dispatch, SetStateAction } from "react";

export interface IPaginatorContext {
    page: number;
    setPage: Dispatch<SetStateAction<any>>;
    pageCount: number;
    setPageCount: Dispatch<SetStateAction<any>>;
}
