import { MouseEventHandler, useContext } from "react";
import { IBasketItem } from "../../../models/IBasketItem";
import { BasketContext } from "../../../providers/basket/Basket.Provider";

function BasketItem({ basketItem }: { basketItem: IBasketItem }) {
  const { removeBasket } = useContext(BasketContext);

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    // @TODO showModal
    removeBasket(basketItem.productId);
  };

  return (
    <div className="basket-item">
      {/* @TODO mini resim URL */}
      <div className="img-area">
        <img src={basketItem.productImageURL} alt=""></img>
      </div>
      <div className="content">
        <h3>{basketItem.productTitle}</h3>
        <button type="button" onClick={onClickHandler}>
          Kaldır
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
