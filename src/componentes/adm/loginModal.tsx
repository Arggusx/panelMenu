import { useState } from 'react';
import { createPortal } from 'react-dom';



export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  let valid = true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setEmailError('Coloque um email válido!');
    valid = false;
  } else {
    setEmailError('');
  }

  if (password.length < 6) {
    setPasswordError('Senha tem que ter pelo menos 6 caracteres.');
    valid = false;
  } else {
    setPasswordError('');
  }

  if (valid) {
    alert('Login bem sucedido!');
    toggleModal();
    setEmail('');
    setPassword('');
  }
};


  const modalContent = (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto modal transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}
      onClick={(e) => e.target === e.currentTarget && toggleModal()}
    >
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-gray-900 opacity-75"></div>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full z-10">
          <div className="px-6 pt-5 pb-4 sm:p-8 sm:pb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 text-left">Login administrador</h3>
                <p className="text-gray-500 mt-1">Por favor, preencha suas credenciais</p>
              </div>
              <button onClick={toggleModal} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`py-3 pl-10 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="voce@exemplo.com"
                    required
                  />
                </div>
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`py-3 pl-10 pr-10 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                      passwordError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Lembrar de mim</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Esqueceu sua senha?</a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-50 px-6 py-4 sm:px-8 flex justify-center">
            <p className="text-sm text-gray-500">
              Não possui uma conta ?
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 ml-1">Cadastrar-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <button
  onClick={toggleModal}
  className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  <i className="fas fa-sign-in-alt mr-2"></i> Login
</button>

      {createPortal(modalContent, document.body)}
    </div>
  );
}
