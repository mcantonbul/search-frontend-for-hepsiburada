import { IBasketItem } from "./IBasketItem";

export interface IBasketContext {
    addBasket: (item: IBasketItem) => void;
    removeBasket: (productId: number) => void;
    checkProductInBasket: (productId: number) => boolean;
    basketList: Array<IBasketItem>;
}
