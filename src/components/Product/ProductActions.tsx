import { MouseEventHandler, useContext, useMemo } from "react";
import { IProduct } from "../../models/IProduct";
import { BasketContext } from "../../providers/basket/Basket.Provider";

function ProductActions({ product }: { product: IProduct }) {
  const { addBasket, checkProductInBasket } = useContext(BasketContext);

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    addBasket({
      productId: product.productId,
      productTitle: product.title,
      productImageURL: `../images/phones/${(product.productId % 4) + 1}.png`,
    });
  };

  return useMemo(() => {
    return (
      <div className="actions">
        <button
          type="button"
          className={`${
            checkProductInBasket(product.productId) ? "disabled" : ""
          }`}
          onClick={onClickHandler}
        >
          {checkProductInBasket(product.productId)
            ? "Bu ürünü sepete ekleyemezsiniz."
            : "Sepete Ekle"}
        </button>
      </div>
    );
  }, [checkProductInBasket(product.productId)]);
}

export default ProductActions;
