import { MouseEventHandler, useContext, useState } from "react";
import { BasketContext } from "../../providers/basket/Basket.Provider";
import BasketItem from "./BasketItem/BasketItem";

function MyBasket() {
  const { basketList } = useContext(BasketContext);
  const [toggleBasketList, setToggleBasketList] = useState(false);
  
  const onMouseOverHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setToggleBasketList(true);
  };

  const onMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setToggleBasketList(false);
  };

  return (
    <div className="my-basket-container" onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {/* @TODO Dil desteği*/}
      <p>Sepetim</p>
      <span className="basket-count-container">
        <span>{basketList.length}</span>
      </span>
      {toggleBasketList && (
        <div className="my-basket-popover">
          {basketList.length > 0 ? basketList.map((basketItem) => (
            <BasketItem
              key={basketItem.productId}
              basketItem={basketItem}
            ></BasketItem>
          )) : <p className="empty-basket-message">Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için
          aşağıdaki ürünleri incelemeye başlayabilirsin.</p>}
        </div>
      )}
    </div>
  );
}

export default MyBasket;
