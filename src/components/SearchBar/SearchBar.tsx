import { useContext, useState } from "react";
import { SearchContext } from "../../providers/search/Search.Provider";

function SearchBar() {
  const [searchString, _setSearchString] = useState('')
  const { setSearchString } = useContext(SearchContext);

  return (
    <div className="search-bar-container">
      <img src="./images/icons/search.png" alt=""></img>
      <input
        type="search"
        value={searchString}
        onChange={(e) => {
          _setSearchString(e.target.value);
          setSearchString(e.target.value);
        }}
        /**
         * @TODO Dil desteği
         */
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
      ></input>
    </div>
  );
}

export default SearchBar;
