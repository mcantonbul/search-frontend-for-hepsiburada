import { createContext, FC, useCallback, useState } from "react";
import { IPaginatorContext } from "../../models/IPaginatorContext";
import { IPaginatorProviderProps } from "../../models/IPaginatorProviderProps";

export const PaginatorContext = createContext<IPaginatorContext>({
  page: 0,
  pageCount: 0,
  setPage: () => {},
  setPageCount: () => {},
});

const PaginatorProvider: FC<IPaginatorProviderProps> = ({ children }) => {
  const [page, _setPage] = useState(0);
  const [pageCount, _setPageCount] = useState(0);

  const setPage = useCallback((page: number) => {
    _setPage(page);
  }, []);

  const setPageCount = useCallback((pageCount: number) => {
    _setPageCount(pageCount);
  }, []);

  return (
    <PaginatorContext.Provider
      value={{ page, setPage, pageCount, setPageCount }}
    >
      {children}
    </PaginatorContext.Provider>
  );
};

export default PaginatorProvider;
