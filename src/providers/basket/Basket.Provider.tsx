import { createContext, FC, useCallback, useEffect, useState } from "react";
import { IBasketContext } from "../../models/IBasketContext";
import { IBasketItem } from "../../models/IBasketItem";
import { IBasketProviderProps } from "../../models/IBasketProviderProps";

export const BasketContext = createContext<IBasketContext>({
  addBasket: (item: IBasketItem) => {},
  removeBasket: (productId: number) => {},
  checkProductInBasket: (productId: number) => false,
  basketList: new Array<IBasketItem>(),
});

const LOCAL_STORAGE_BASKET_KEY = "hepsi-burada-case-basket";
let basketArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_BASKET_KEY) as string)

const BasketProvider: FC<IBasketProviderProps> = ({ children }) => {
  const [basketList, setBasketList] = useState<Array<IBasketItem>>(basketArray || new Array<IBasketItem>());

  const addBasket = useCallback(
    (item: IBasketItem) => {
      const findedIndex = basketList.findIndex(
        (s) => s.productId === item.productId
      );
      if (findedIndex < 0) {
        basketList.push(item);
        setBasketListWithLocalStorage();
      }
    },
    []
  );

  const removeBasket = useCallback(
    (productId: number) => {
      const findedIndex = basketList.findIndex(
        (s) => s.productId === productId
      );
      if (findedIndex > -1) {
        basketList.splice(findedIndex, 1);
        setBasketListWithLocalStorage();
      }
    },
    []
  );

  const setBasketListWithLocalStorage = () => {
    const newBasketData = [...basketList]
    localStorage.setItem(
      LOCAL_STORAGE_BASKET_KEY,
      JSON.stringify(newBasketData)
    );
    setBasketList(newBasketData)
  }

  const checkProductInBasket = useCallback(
    (productId: number) => {
      return basketList.findIndex((s) => s.productId === productId) > -1;
    },
    []
  );

  return (
    <BasketContext.Provider
      value={{ basketList, addBasket, removeBasket, checkProductInBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
