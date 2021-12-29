import Filters from "./Filters/Filters";
import SearchResults from "./SearchResults/SearchResults";
import SearchResultsHeader from "./SearchResultsHeader/SearchResultsHeader";

function SearchResultsContainer() {
  return (
    <div className="search-results-container">
      <SearchResultsHeader></SearchResultsHeader>
      <div className="search-results-area">
        <Filters></Filters>
        <SearchResults></SearchResults>
      </div>
    </div>
  );
}

export default SearchResultsContainer;
