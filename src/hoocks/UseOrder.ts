/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Order, OrderStatus } from '../types/Order';

const statusPriority: Record<OrderStatus, number> = {
  "Pendente": 1,
  "EmPreparo": 2,
  "Pronto": 3,
  "Entregue": 4
};

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {

        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_MENU_API_URL}/pedidos`);

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

        // Converter strings de data para objetos Date com validação
        const ordersWithDates = data.map((order: any) => {
          let createdAt = new Date(order.criadoEm);
          if (isNaN(createdAt.getTime())) createdAt = new Date();

          // Parse dos itens
          let items: { name: any; quantity: any; price: any; }[] = [];
          try {
            const parsed = JSON.parse(order.itens);
            if (Array.isArray(parsed)) {
              items = parsed.map((item: any) => ({
                name: item.nome,
                quantity: item.quantidade,
                price: item.preco
              }));
            }
          } catch (e) {
            console.warn(`Erro ao parsear itens do pedido #${order.id}:`, e);
          }

          return {
            ...order,
            createdAt,
            items,
            total: parseFloat(order.valorTotal),
            customerName: order.nomeCliente,
            customerPhone: order.telefoneCliente,
            notes: order.observacoes,
            table: order.mesa
          };
        });

        setOrders(ordersWithDates);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar pedidos:', err);
        setError('Não foi possível carregar os pedidos. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = (id: number, newStatus: OrderStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const patchOrderStatus = async (id: number, newStatus: OrderStatus) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_MENU_API_URL}/pedidos/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar status');
      }
      updateOrderStatus(id, newStatus); // atualiza localmente após sucesso
    } catch (error) {
      console.error(`Erro ao atualizar status do pedido #${id}:`, error);
    }
  };

  const filterOrdersByStatus = (status?: OrderStatus) => {
    const filteredOrders = status
      ? orders.filter(order => order.status === status)
      : [...orders];

    if (status) {
      return filteredOrders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    return filteredOrders.sort((a, b) => {
      const priorityDiff = statusPriority[a.status] - statusPriority[b.status];
      if (priorityDiff !== 0) return priorityDiff;
      return b.createdAt.getTime() - a.createdAt.getTime();
    });

  };

  return {
    orders,
    loading,
    error,
    updateOrderStatus,
    patchOrderStatus,
    filterOrdersByStatus
  };
};
