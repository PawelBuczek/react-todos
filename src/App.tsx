import React, { useState } from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed cat', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One' }
  ]);

  const addTodo: (description: string, assigned: string) => void = (description: string, assigned: string) => {
    const newTodo = {
      rowNumber: todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo: (deleteToDoRowNumber: number) => void = (deleteToDoRowNumber: number) => {
    const filtered = todos.filter(todo => todo.rowNumber !== deleteToDoRowNumber);
    const updatedTodos = updateRowNumbers(filtered);
    setTodos(updatedTodos);
  };

  const swapElements: (array: ToDoModel[], index1: number, index2: number) => ToDoModel[] = (array: ToDoModel[], index1: number, index2: number) => {
    const newArray = [...array];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
  };

  const updateRowNumbers: (todos: ToDoModel[]) => ToDoModel[] = (todos: ToDoModel[]) => {
    return todos.map((todo: ToDoModel, index: number) => ({
        ...todo,
        rowNumber: index + 1,
    }));
};

const moveTodo: (currentIndex: number, newIndex: number) => void = (currentIndex: number, newIndex: number) => {
    if (currentIndex > 0 && currentIndex <= todos.length && newIndex > 0 && newIndex <= todos.length) {
        const newTodos = swapElements(todos, currentIndex - 1, newIndex - 1);
        const updatedTodos = updateRowNumbers(newTodos);
        setTodos(updatedTodos);
    }
};

const moveTodoDown: (rowNumber: number) => void = (rowNumber: number) => {
    moveTodo(rowNumber, rowNumber + 1);
};

const moveTodoUp: (rowNumber: number) => void = (rowNumber: number) => {
    moveTodo(rowNumber, rowNumber - 1);
};


  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} moveTodoDown={moveTodoDown} moveTodoUp={moveTodoUp} />
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
