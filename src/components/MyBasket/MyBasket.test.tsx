/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import { IBasketItem } from "../../models/IBasketItem";
import { BasketContext } from "../../providers/basket/Basket.Provider";
import MyBasket from "./MyBasket";

test("sepetteki toplam ürün sayısı gösterilmeli", () => {
  const basketList = [
    { productId: 1, productTitle: "Apple 11" } as IBasketItem,
  ];

  const { container } = customRender(<MyBasket />, basketList);
  const basketCount = Number(
    container.querySelector(".basket-count-container > span")?.innerHTML
  );
  expect(basketCount).toBe(1);
});

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui: JSX.Element, basketList: Array<IBasketItem>) => {
  return render(
    <BasketContext.Provider value={{ basketList } as any}>
      {ui}
    </BasketContext.Provider>
  );
};
