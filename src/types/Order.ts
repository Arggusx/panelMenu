export type OrderStatus = "Pendente" | "Em preparo" | "Pronto" | "Entregue";

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  table: number;
  customerName: string;
  customerPhone: string;
  items: OrderItem[];
  notes?: string;
  total: number;
  status: OrderStatus;
  createdAt: Date;
}