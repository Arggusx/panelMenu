import Dashboard from "./page/Dashdoard";
import { useState } from "react";
import LoginModal from '/home/arggusx/Documentos/Projetos/panelMenu/src/componentes/adm/loginModal.tsx';

const App: React.FC = () =>  {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (username: string, password: string) => {
    console.log('Login solicitado:', username, password);
    // aqui você pode adicionar sua lógica de autenticação
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-7 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Hamburgueria Admin</h1>
      
        </div>
      </nav>
      <main>
        <Dashboard />
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onLogin={handleLogin}
        />
      </main>
</div>
  );
}

export default App;