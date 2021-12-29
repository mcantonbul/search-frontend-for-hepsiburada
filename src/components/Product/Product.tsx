import { IProduct } from "../../models/IProduct";
import ProductActions from "./ProductActions";

function Product({ product }: { product: IProduct }) {
  /**
   * @TODO Skeleton Eklenmeli, Yavaş Network operasyonları için
   */
  return (
    <li className="product">
      <div className="product-image">
        <img
          src={`../images/phones/${(product.productId % 4) + 1}.png`}
          alt="some title"
        ></img>
      </div>
      <h3>{product.title}</h3>
      <div className="sub-infos">
        <div className="brand-color-info">
          <p>
            <b>Marka:</b>
            <span>{product.brandTitle}</span>
          </p>
          <p>
            <b>Renk:</b>
            <span>{product.colorTitle}</span>
          </p>
        </div>
        <div className="price-info">
          {/* @TODO Para cinsi */}
          <p className="price">{Number(product.price).toLocaleString()} TL</p>
          {product.discountRate > 0 && (
            <div className="discount-info">
              <p className="original-price">{product.originalPrice} TL</p>
              <span className="discount-rate">{product.discountRate}%</span>
            </div>
          )}
        </div>
      </div>
      <ProductActions product={product}></ProductActions>
    </li>
  );
}

export default Product;
