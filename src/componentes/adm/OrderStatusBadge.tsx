import React from 'react';
import { OrderStatus } from '../../types/Order';

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ status }) => {
  const getStatusColor = (): string => {
    switch (status) {
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'EmPreparo':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pronto':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Entregue':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor()}`}>
      {status}
    </span>
  );
};

export default OrderStatusBadge;