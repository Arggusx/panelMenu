import { useState } from 'react';
import { Order, OrderStatus } from '../types/types';

// In a real application, this would fetch data from an API
const mockOrders: Order[] = [
  {
    id: 1,
    table: 5,
    customerName: "João Silva",
    customerPhone: "82999211763",
    items: [
      { id: 1, name: "Pizza Margherita", quantity: 1, price: 39.90 },
      { id: 2, name: "Coca-Cola 600ml", quantity: 2, price: 5.00 }
    ],
    notes: "Sem cebola na pizza, por favor",
    total: 49.90,
    status: "Em preparo",
    createdAt: new Date(Date.now() - 30 * 60000) // 30 minutes ago
  },
  {
    id: 2,
    table: 3,
    customerName: "Maria Santos",
    customerPhone: "11988888888",
    items: [
      { id: 3, name: "Hambúrguer Artesanal", quantity: 1, price: 28.90 },
      { id: 4, name: "Batata Frita", quantity: 1, price: 12.90 },
      { id: 1, name: "Pizza Margherita", quantity: 2, price: 39.90 },
      { id: 2, name: "Coca-Cola 600ml", quantity: 2, price: 5.00 },
      { id: 6, name: "Salada Caesar", quantity: 1, price: 25.90 },
      { id: 9, name: "Vinho Tinto (Taça)", quantity: 2, price: 18.00 },
      { id: 7, name: "Água com gás", quantity: 1, price: 4.50 }
    ],
    total: 57.70,
    status: "Pronto",
    createdAt: new Date(Date.now() - 15 * 60000) // 15 minutes ago
  },
  {
    id: 3,
    table: 8,
    customerName: "Carlos Oliveira",
    customerPhone: "11977777777",
    items: [
      { id: 6, name: "Salada Caesar", quantity: 1, price: 25.90 },
      { id: 7, name: "Água com gás", quantity: 1, price: 4.50 }
    ],
    notes: "",
    total: 30.40,
    status: "Pendente",
    createdAt: new Date(Date.now() - 5 * 60000) // 5 minutes ago
  },
  {
    id: 4,
    table: 2,
    customerName: "Ana Pereira",
    customerPhone: "11966666666",
    items: [
      { id: 8, name: "Espaguete à Bolonhesa", quantity: 1, price: 32.90 },
      { id: 9, name: "Vinho Tinto (Taça)", quantity: 2, price: 18.00 }
    ],
    total: 68.90,
    status: "Entregue",
    createdAt: new Date(Date.now() - 60 * 60000) // 60 minutes ago
  }
];

// Define a priority order for statuses
const statusPriority: Record<OrderStatus, number> = {
  "Pendente": 1,
  "Em preparo": 2,
  "Pronto": 3,
  "Entregue": 4
};

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const updateOrderStatus = (id: number, newStatus: OrderStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const filterOrdersByStatus = (status?: OrderStatus) => {
    const filteredOrders = status 
      ? orders.filter(order => order.status === status)
      : [...orders];
    
    // Sort by status priority and then by creation date (newest first)
    return filteredOrders.sort((a, b) => {
      // First sort by status priority
      const priorityDiff = statusPriority[a.status] - statusPriority[b.status];
      if (priorityDiff !== 0) return priorityDiff;
      
      // If same status, sort by creation date (newest first)
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
  };

  return {
    orders,
    updateOrderStatus,
    filterOrdersByStatus
  };
};