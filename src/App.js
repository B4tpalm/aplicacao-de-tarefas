import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddTask from './AddTask';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Minhas Tarefas</h1>
        <nav>
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/add" className="nav-link">Adicionar Tarefa</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<AddTask />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;