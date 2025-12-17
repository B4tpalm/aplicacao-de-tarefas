import { useTasks } from './TasksContext';
import { Link } from 'react-router-dom';

function Home() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  return (
    <div className="home">
      {tasks.length === 0 ? (
        <p className="empty-message">Nenhuma tarefa ainda. Adicione uma!</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.title}</span>
              </div>
              <div className="task-actions">
                <Link to={`/edit/${task.id}`} className="edit-btn">Editar</Link>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;