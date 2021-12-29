import { render, screen } from "@testing-library/react";
import { IBasketItem } from "../../models/IBasketItem";
import { IProduct } from "../../models/IProduct";
import BasketProvider, { BasketContext } from "../../providers/basket/Basket.Provider";
import ProductActions from "./ProductActions";

/**
 * @TODO mock json
 */
const product: IProduct = {
  productId: 1,
  title: "Apple 11",
  imageURL: "img.jpg",
  brandId: 1,
  brandTitle: "apple",
  colorId: 1,
  colorTitle: "kırmızı",
  discountRate: 0,
  originalPrice: 100,
  price: 100,
};

const basketList = [{ productId: 1, productTitle: "Apple 11" } as IBasketItem];

const checkProductInBasket=(productId: number)=>{
    return basketList.findIndex((s) => s.productId === productId) > -1;
}

test("sepette olmayan ürün için `Sepete Ekle` butonu gözükmeli", () => {
  render(
    <BasketProvider>
      <ProductActions product={product}></ProductActions>
    </BasketProvider>
  );

  const linkElement = screen.getByRole("button", {
    name: /Sepete Ekle/i,
  });
  expect(linkElement).toBeInTheDocument();
});

test("sepette olan ürün için `Bu ürünü sepete ekleyemezsiniz.` butonu gözükmeli", () => {

  customRender(
    <ProductActions product={product} />,
    basketList,
    checkProductInBasket
  );

  const linkElement = screen.getByRole("button", {
    name: /Bu ürünü sepete ekleyemezsiniz./i,
  });
  expect(linkElement).toBeInTheDocument();
});

const customRender = (
  ui: JSX.Element,
  basketList: Array<IBasketItem>,
  checkProductInBasket?: (productId: number) => boolean
) => {
  return render(
    <BasketContext.Provider value={{ basketList, checkProductInBasket } as any}>
      {ui}
    </BasketContext.Provider>
  );
};
