export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 'Pendente' | 'Em preparo' | 'Pronto' | 'Entregue';

export interface Order {
  id: number;
  customerName: string;
  customerPhone: string;
  notes: string;
  status: OrderStatus;
  createdAt: Date;
  items: OrderItem[];
  total: number;
  table: number;
}

export interface Product {
  name: string;
  description?: string;
  valor: string;
  price: number;
  image: string;
  id: string
}

export interface Burger extends Product {
  description: string;
}

export interface Beverage extends Product {
  description?: string;
}

export interface ApiOrderResponse {
  id: number;
  table: number;
  customerName: string;
  customerPhone: string;
  items: OrderItem[];
  notes?: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}