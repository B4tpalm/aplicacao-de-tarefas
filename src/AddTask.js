import { useState } from 'react';
import { useTasks } from './TasksContext';
import { useNavigate, useParams } from 'react-router-dom';

function AddTask() {
  const { tasks, addTask, editTask } = useTasks();
  const { id } = useParams();
  const navigate = useNavigate();

  const editingTask = tasks.find(task => task.id === Number(id));
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    if (editingTask) {
      editTask(editingTask.id, title);
    } else {
      addTask(title);
    }
    navigate('/');
  };

  return (
    <div className="add-task">
      <h2>{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          className="task-input"
        />
        <div className="form-actions">
          <button type="submit" className="save-btn">
            {editingTask ? 'Salvar Alterações' : 'Adicionar'}
          </button>
          <button type="button" onClick={() => navigate('/')} className="cancel-btn">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;