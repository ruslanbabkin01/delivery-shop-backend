import { IOrder, IProduct } from "src/types/interfaces"

export const checkOrderProductsShopId = ({
  shop: id,
  products,
}: IOrder): boolean => {
  return products.every((product: IProduct) => product.owner === id)
}
