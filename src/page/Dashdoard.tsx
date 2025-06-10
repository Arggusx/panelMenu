import React, { useState } from 'react';
import OrderCard from '../componentes/adm/OrdrCard';
import { OrderStatus } from '../types/Order';
import { useOrders } from '../hoocks/UseOrder';
import { ClipboardList, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { orders, loading, error, patchOrderStatus, filterOrdersByStatus } = useOrders();
  const [statusFilter, setStatusFilter] = useState<OrderStatus | undefined>(undefined);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const filteredOrders = filterOrdersByStatus(statusFilter);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = 'login';
  };

  // Renderiza indicador de carregamento
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
        <p className="mt-4 text-gray-600 font-medium">Carregando pedidos...</p>
      </div>
    );
  }

  // Renderiza mensagem de erro
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start">
          <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-lg font-medium text-red-800">Erro ao carregar pedidos</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
            <button
              className="mt-3 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 text-sm font-medium rounded-md transition-colors"
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calcula os totais para cada status
  const pendingCount = orders.filter(order => order.status === 'Pendente').length;
  const preparingCount = orders.filter(order => order.status === 'EmPreparo').length;
  const readyCount = orders.filter(order => order.status === 'Pronto').length;
  const deliveredCount = orders.filter(order => order.status === 'Entregue').length;
  const totalCount = pendingCount + preparingCount + readyCount + deliveredCount;




  return (
    <>
      <div className=" bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-7 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Hamburgueria Admin</h1>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="relative overflow-hidden logout-btn flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-medium text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:rotate-x-6 active:translate-y-0 active:rotate-x-0"
            >
              <i className="fas fa-sign-out-alt" />
              <span>Sair</span>
            </button>
          </div>
        </nav>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Deseja realmente sair?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <ClipboardList size={32} className="text-blue-600" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Painel de Pedidos</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setStatusFilter(undefined)}>
              <p className="text-sm text-black font-medium">Todos</p>
              <p className="text-xl font-bold text-black">{totalCount}</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 cursor-pointer hover:bg-yellow-100 transition-colors"
              onClick={() => setStatusFilter('Pendente')}>
              <p className="text-sm text-yellow-800 font-medium">Pendentes</p>
              <p className="text-xl font-bold text-yellow-900">{pendingCount}</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={() => setStatusFilter('EmPreparo')}>
              <p className="text-sm text-blue-800 font-medium">Em preparo</p>
              <p className="text-xl font-bold text-blue-900">{preparingCount}</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-3 cursor-pointer hover:bg-green-100 transition-colors"
              onClick={() => setStatusFilter('Pronto')}>
              <p className="text-sm text-green-800 font-medium">Prontos</p>
              <p className="text-xl font-bold text-green-900">{readyCount}</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setStatusFilter('Entregue')}>
              <p className="text-sm text-gray-800 font-medium">Entregues</p>
              <p className="text-xl font-bold text-gray-900">{deliveredCount}</p>
            </div>
          </div>
        </header>

        {filteredOrders.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-gray-500 text-lg">Nenhum pedido encontrado{statusFilter ? ` com status "${statusFilter}"` : ''}.</p>
            {statusFilter && (
              <button
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
                onClick={() => setStatusFilter(undefined)}
              >
                Mostrar todos os pedidos
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                onStatusChange={patchOrderStatus}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;