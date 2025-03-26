import React, { useState } from 'react';
import OrderCard from '../componentes/adm/OrdrCard';
import { OrderStatus } from '../types/Order';
import { useOrders } from '../hoocks/UseOrder';
import { ClipboardList } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { orders, updateOrderStatus, filterOrdersByStatus } = useOrders();
  const [statusFilter, setStatusFilter] = useState<OrderStatus | undefined>(undefined);

  const filteredOrders = filterOrdersByStatus(statusFilter);

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <ClipboardList size={32} className="text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Painel de Pedidos</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Filtrar por status:</span>
            <select
              value={statusFilter || ''}
              onChange={(e) => setStatusFilter(e.target.value as OrderStatus || undefined)}
              className="border border-gray-300 rounded-md p-2 text-sm"
            >
              <option value="">Todos</option>
              <option value="Pendente">Pendente</option>
              <option value="Em preparo">Em preparo</option>
              <option value="Pronto">Pronto</option>
              <option value="Entregue">Entregue</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
            <p className="text-sm text-yellow-800 font-medium">Pendentes</p>
            <p className="text-xl font-bold text-yellow-900">
              {orders.filter(order => order.status === 'Pendente').length}
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
            <p className="text-sm text-blue-800 font-medium">Em preparo</p>
            <p className="text-xl font-bold text-blue-900">
              {orders.filter(order => order.status === 'Em preparo').length}
            </p>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-lg p-3">
            <p className="text-sm text-green-800 font-medium">Prontos</p>
            <p className="text-xl font-bold text-green-900">
              {orders.filter(order => order.status === 'Pronto').length}
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
            <p className="text-sm text-gray-800 font-medium">Entregues</p>
            <p className="text-xl font-bold text-gray-900">
              {orders.filter(order => order.status === 'Entregue').length}
            </p>
          </div>
        </div>
      </header>

      {filteredOrders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum pedido encontrado com o status selecionado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map(order => (
            <OrderCard 
              key={order.id} 
              order={order} 
              onStatusChange={updateOrderStatus} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;