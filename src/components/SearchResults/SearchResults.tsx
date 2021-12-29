import { useContext } from "react";
import { SearchContext } from "../../providers/search/Search.Provider";
import Paginator from "../Paginator/Paginator";
import Product from "../Product/Product";

function SearchResults() {
  const { products } = useContext(SearchContext);
  
  // useEffect(() => {
  //   fetch("http://localhost:8080/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <div className="search-results-inner-container">
      <ul className="search-results">
        {products?.slice(0, 12).map((product) => (
          <Product key={product.productId} product={product}></Product>
        ))}
      </ul>
      <Paginator></Paginator>
    </div>
  );
}

export default SearchResults;
