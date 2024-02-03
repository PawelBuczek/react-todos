import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed cat', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One' }
  ]);

  const addTodo = (description, assigned) => {
    const newTodo = {
      rowNumber: todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (deleteToDoRowNumber) => {
    const filtered = todos.filter(todo => todo.rowNumber !== deleteToDoRowNumber);
    setTodos(filtered);
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className='btn btn-primary'
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
