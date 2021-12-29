import { IFilterContainer } from "../../models/IFilterContainer";

function FilterContainer({
  filterContainer,
}: {
  filterContainer: IFilterContainer;
}) {
  return (
    <div className="filter-container">
      <h3>{filterContainer.header}</h3>
      {filterContainer.filters.map((filter, index) => (
        <div
          key={index}
          className={`filter-name-container ${filterContainer.selectedFilterId === filter.id ? 'active-filter' : ''}`}
          onClick={() => filterContainer.onClickFilter?.(filter.id)}
        >
          <p className="filter-name">
            {filter.label}{" "}
            {filterContainer.showCount && (
              <span className="filter-count">({filter.count})</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FilterContainer;
