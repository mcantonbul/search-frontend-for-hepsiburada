import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IBaseFilter } from "../../models/IBaseFilter";
import { ISearchContext } from "../../models/ISearchContext";
import { ISearchProviderProps } from "../../models/ISearchProviderProps";
import { FilterContext } from "../filter/Filter.Provider";
import { PaginatorContext } from "../paginator/Paginator.Provider";

export const SearchContext = createContext<ISearchContext>({
  searchString: "",
  setSearchString: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
  products: []
});

var delayTimer: NodeJS.Timeout;
const INPUT_DELAY = 250;

const SearchProvider: FC<ISearchProviderProps> = ({ children }) => {
  const [searchString, _setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);

  const {
    currentOrderFilterId,
    brandId,
    colorId,
    setBrandId,
    setColorId,
    setBrandFilters,
    setColorFilters,
  } = useContext(FilterContext);

  const { setPageCount, page } = useContext(PaginatorContext);

  const abortController = useRef<AbortController>();

  const setSearchString = useCallback((str: string) => {
    if (str.length > 2 || str.length === 0) {
      _setSearchString(str);
      setBrandId(-1)
      setColorId(-1)
      getProductWithTimeGuard(str);
    }
  }, []);

  /**
   * @TODO Move to Service File
   */
  const getProducts = (searchString?: string) => {
    if (abortController.current) abortController.current?.abort();

    abortController.current = new AbortController();
    const query = buildQuery(searchString);
    fetch(`http://localhost:8080/products${query ? query : ""}`, {
      signal: abortController.current?.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          /**
           * @TODO Types
           */
          setProducts(data.products || []);
          setColorFilters(
            (data.colors as Array<any>)?.map((s) => {
              return {
                label: s.color.title,
                id: s.color.colorId,
                count: s.count,
              } as IBaseFilter;
            }) || []
          );
          setBrandFilters(
            (data.brands as Array<any>)?.map((s) => {
              return {
                label: s.brand.title,
                id: s.brand.brandId,
                count: s.count,
              } as IBaseFilter;
            }) || []
          );
          setPageCount(data.pageCount || 0);
        }
      });
  };

  const getProductWithTimeGuard = (searchString?: string) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      getProducts(searchString);
    }, INPUT_DELAY);
  };

  const buildQuery = (_searchString: string = searchString): string => {
    let query = "";
    if (_searchString && _searchString.length > 2) {
      query += `q=${_searchString}`;
    }
    if (colorId && colorId >= 0) {
      query += `${query !== "" ? "&" : ""}colorId=${colorId}`;
    }
    if (brandId && brandId >= 0) {
      query += `${query !== "" ? "&" : ""}brandId=${brandId}`;
    }
    if(currentOrderFilterId && currentOrderFilterId >= 0) {
      query += `${query !== "" ? "&" : ""}orderId=${currentOrderFilterId}`;
    }
    if(page && page > 0) {
      query += `${query !== "" ? "&" : ""}page=${page}`;
    }
    if (query !== "") {
      query = `?${query}`;
    }
    return query;
  };

  useEffect(() => {
    getProductWithTimeGuard();
  }, [brandId,colorId,currentOrderFilterId,page]);

  return (
    <SearchContext.Provider
      value={{ searchString, setSearchString, currentPage, setCurrentPage, products }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
