import { MouseEventHandler, useContext } from "react";
import { PaginatorContext } from "../../providers/paginator/Paginator.Provider";

function Paginator() {
  /**
   * @TODO Component ViewOnly olmalı bu bilgiler dışarıdan alınmalı....
   */
  const { page,pageCount,setPage } = useContext(PaginatorContext);

  const onClickPrevHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const onClickNextHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (page !== pageCount - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className="paginator-container">
      {pageCount > 1 && (
        <button type="button" onClick={onClickPrevHandler}>
          &#60;
        </button>
      )}

      {Array.from(Array(pageCount).keys()).map((s, index) => (
        <button
          key={index}
          className={`${page === index ? "active" : ""}`}
          onClick={() => setPage(index)}
        >
          {index + 1}
        </button>
      ))}
      {pageCount > 1 && (
        <button type="button" onClick={onClickNextHandler}>
          &#62;
        </button>
      )}
    </div>
  );
}

export default Paginator;
