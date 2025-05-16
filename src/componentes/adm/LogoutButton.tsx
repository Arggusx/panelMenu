import { useState, MouseEvent, JSX } from "react";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const [showModal, setShowModal] = useState(false);
  const [ripples, setRipples] = useState<JSX.Element[]>([]);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  const handleRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = (
      <span
        key={Date.now()}
        className="ripple absolute rounded-full bg-white/70 pointer-events-none animate-ripple"
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
        }}
      />
    );

    setRipples([...ripples, ripple]);

    setTimeout(() => {
      setRipples([]);
      setShowModal(true);
    }, 600);
  };

  return (
    <>
      <div className="relative z-10">
        <button
          onClick={handleRipple}
          className="relative overflow-hidden logout-btn flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-medium text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:rotate-x-6 active:translate-y-0 active:rotate-x-0"
        >
          <i className="fas fa-sign-out-alt" />
          <span>Sair</span>
          {ripples}
        </button>

        {showModal && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <i className="fas fa-exclamation text-red-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Tem certeza que deseja sair?
                </h3>
                <p className="text-gray-500 mb-6">
                  Você será desconectado da sua conta atual.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-transparent rounded-md text-white bg-red-600 hover:bg-red-700 transition"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
