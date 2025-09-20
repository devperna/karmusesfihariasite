export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Combo extends MenuItem {
  itens: string[];
}
