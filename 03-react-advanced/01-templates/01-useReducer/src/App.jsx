import initialTodos from './initialTodos';
import { useState, useEffect } from 'react';

// (1) Define action types

// (2) Define reducer
const App = () => {
  // (3) Replace useState with useReducer
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || initialTodos);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (t) => {
    const updatedTodos = todos.reduce((acc, todo) => {
      if (todo.id === t.id) {
        return [...acc, {
          ...todo,
          complete: !todo.complete,
        }];
      }
      return [...acc, todo];
    }, []);

    setTodos(updatedTodos);
  }

  const handleChangeInput = (ev) => setNewTodoText(ev.target.value);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const updatedTodos = [
      ...todos, {
        id: todos.length + 1,
        text: newTodoText,
        complete: false,
      }
    ];

    setTodos(updatedTodos);
    setNewTodoText('');
  }

  return (
    <main>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Enter todo...' 
          value={newTodoText} 
          onChange={handleChangeInput}
        />
        <button type='submit'>Add todo</button>
      </form>
      {todos.map((t) => (
        <section key={t.id}>
          <label htmlFor={t.id}>{t.text}</label>
          <input 
            id={t.id} 
            type='checkbox' 
            checked={t.complete} 
            onChange={() => handleChange(t)}
          />
        </section>
      ))}
    </main>
  );
}

export default App;
