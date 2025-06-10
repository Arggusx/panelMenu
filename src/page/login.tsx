import React, { useState } from "react";
import "../styles/LoginAnimations.css";


const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_MENU_API_URL}/admin/${mode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        alert(data.message || "Erro ao processar.");
        return;
      }

      if (mode === "register") {
        alert("Usuário registrado com sucesso! Agora você pode fazer login.");
        setMode("login");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login realizado com sucesso! Redirecionando para o painel...");
      window.location.href = "dashboard";

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro na conexão. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="gradient-bg py-6 px-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Cardápio Online</h1>
                <p className="text-blue-100 text-sm mt-1">
                  {mode === "login" ? "Painel de Administração" : "Registro de Administrador"}
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <i className="fas fa-utensils text-blue-700 text-xl" />
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="px-8 py-8">
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 ${shake ? "shake" : ""}`}
            >
              {/* Usuário */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Usuário
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm input-focus py-3 border focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite seu usuário"
                  />
                </div>
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 block w-full rounded-md border-gray-300 shadow-sm input-focus py-3 border focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite sua senha"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} text-gray-400 hover:text-gray-600`} />
                  </div>
                </div>
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full flex justify-center gradient-bg py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <i className={`fas ${mode === "login" ? "fa-sign-in-alt" : "fa-user-plus"} mr-2`} />
                {mode === "login" ? "Entrar" : "Registrar"}
              </button>

              {/* Alternar modo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Lembrar de mim
                  </label>
                </div>
                {/*<div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Esqueceu a senha?
                  </a>
                </div>*/}
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© 2025 Cardápio Online. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
