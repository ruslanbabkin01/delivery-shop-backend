export interface IProduct {
  owner: string
}

export interface IOrder {
  shop: string
  products: Product[]
}

export interface Product {
  _id: string
  name: string
  price: number
  owner: string
  photoUrl: string
}
