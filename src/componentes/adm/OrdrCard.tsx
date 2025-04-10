import React, { useState } from 'react';
import { Order } from '../../types/Order';
import OrderStatusBadge from './OrderStatusBadge';
import QRCodeModal from './QRCodeModal';
import { formatCurrency } from '../../utils/utils';
import { Clock, QrCode, User, Phone as PhoneIcon } from 'lucide-react';

interface OrderCardProps {
  order: Order;
  onStatusChange: (id: number, newStatus: Order['status']) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onStatusChange }) => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(order.id, e.target.value as Order['status']);
  };

  // Modifique a função formatDate para lidar com datas inválidas
const formatDate = (date: Date | string) => {
  try {
    // Se for string, converte para Date
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Verifica se a data é válida
    if (isNaN(dateObj.getTime())) {
      return 'Data inválida';
    }
    
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(dateObj);
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return 'Data inválida';
  }
};

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold">Pedido #{order.id}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Clock size={14} />
              {formatDate(order.createdAt)}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-gray-800">Mesa {order.table}</span>
            <OrderStatusBadge status={order.status} />
          </div>
        </div>

        <div className="mb-3">
          <p className="text-sm flex items-center gap-1 mb-1">
            <User size={14} className="text-gray-500" />
            <span className="font-medium">{order.customerName}</span>
          </p>
          <p className="text-sm flex items-center gap-1">
            <PhoneIcon size={14} className="text-gray-500" />
            <span>{order.customerPhone}</span>
          </p>
        </div>

        <div className="border-t border-b border-gray-100 py-3 mb-3">
          <h4 className="font-medium text-sm mb-2">Itens do pedido:</h4>
          <ul className="space-y-1">
            {order.items.map((item, index) => (
              <li key={index} className="text-sm flex justify-between">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span className="text-gray-600">{formatCurrency(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <h4 className="font-medium text-sm mb-1">Observações:</h4>
          <p className="text-sm bg-yellow-50 p-2 rounded-md">
            {order.notes || "Sem observações"}
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="font-medium">Total:</span>
          <span className="text-lg font-bold">{formatCurrency(order.total)}</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor={`status-${order.id}`} className="text-sm font-medium">
              Status:
            </label>
            <select
              id={`status-${order.id}`}
              value={order.status}
              onChange={handleStatusChange}
              className="flex-1 text-sm border border-gray-300 rounded-md p-1"
            >
              <option value="Pendente">Pendente</option>
              <option value="Em preparo">Em preparo</option>
              <option value="Pronto">Pronto</option>
              <option value="Entregue">Entregue</option>
            </select>
          </div>

          <button
            onClick={() => setIsQRModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            <QrCode size={18} />
            <span>Gerar QR Code</span>
          </button>
        </div>
      </div>

      <QRCodeModal
        order={order}
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
};

export default OrderCard;