import Dashboard from "./page/Dashdoard";arquivo
import LoginModal from './componentes/adm/loginModal.tsx';

const App: React.FC = () =>  {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-7 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Hamburgueria Admin</h1>
        </div>
      </nav>
      <main>
        <Dashboard />
        <LoginModal />
      </main>
</div>
  );
};

export default App;
