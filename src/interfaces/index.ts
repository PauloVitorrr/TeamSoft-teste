export type Root = Root2[];

export interface Root2 {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: number;
  vl_discount: number;
  url_image: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  group: string;
  max_itens: number;
  type: string;
  itens: Iten[];
}

export interface Iten {
  id: number;
  nm_item: string;
  vl_item: number;
}
