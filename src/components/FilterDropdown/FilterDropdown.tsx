import { MouseEventHandler, useContext, useState } from "react";
import { FilterContext } from "../../providers/filter/Filter.Provider";

function FilterDropDown() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const { currentOrderFilterId, setCurrentOrderFilterId, orderFilters } =
    useContext(FilterContext);

  const onClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <div className="filter-dropwdown" onClick={onClickHandler}>
      <p>
        Sıralama <img src="../images/icons/down.png" alt=""></img>
      </p>
      {toggleDropdown && (
        <div className="stick-popover">
          {orderFilters.map((order, index) => (
            <div key={index} onClick={() => setCurrentOrderFilterId(order.id)}>
              <span className={currentOrderFilterId === order.id ? "" : "hide"}>
                &#10004;
              </span>
              {order.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropDown;
