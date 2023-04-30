export interface Order {
  id: number;
  createdAt: Date;
  products: OrderedProduct[];
}

export interface OrderedProduct {
  id: number;
  amount: number;
  price: number;
}
