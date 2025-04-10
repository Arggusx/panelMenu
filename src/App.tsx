import Dashboard from "./page/Dashdoard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-xl font-bold text-blue-600">Hamburgueria Admin</h1>
        </div>
      </nav>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;