export interface Color {
  id: number;
  name: string;
}

export interface GoodFromServer {
  id: number;
  name: string;
  colorId: number;
}

export interface Good extends GoodFromServer {
  color: string;
}

export type Goods = Good[];
