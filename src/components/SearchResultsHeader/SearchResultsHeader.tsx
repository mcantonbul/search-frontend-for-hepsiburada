import { useContext } from "react";
import { SearchContext } from "../../providers/search/Search.Provider";
import FilterDropDown from "../FilterDropdown/FilterDropdown";

function SearchResultsHeader() {
  const { searchString } = useContext(SearchContext);

  return (
    <div className="search-results-header">
      {searchString && (
        <p>
          Aranan Kelime: <b>{searchString}</b>
        </p>
      )}

      <FilterDropDown></FilterDropDown>
    </div>
  );
}

export default SearchResultsHeader;
