import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FilterProvider from "./providers/filter/Filter.Provider";
import BasketProvider from "./providers/basket/Basket.Provider";
import SearchProvider from "./providers/search/Search.Provider";
import PaginatorProvider from "./providers/paginator/Paginator.Provider";

ReactDOM.render(
  <React.StrictMode>
    {/* @TODO Providerlar tek bir yerde toplanabilir mi? */}
    <BasketProvider>
      <PaginatorProvider>
        <FilterProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </FilterProvider>
      </PaginatorProvider>
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
